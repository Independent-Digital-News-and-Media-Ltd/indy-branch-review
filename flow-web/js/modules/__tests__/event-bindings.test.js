/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://www.independent.co.uk/"}
 */

import {
  CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_CANCEL,
  CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_COMPLETE,
  CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_SHOWN,
  CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_START,
  CHARTBEAT_EVENT_PAYWALL_START,
  CHARTBEAT_EVENT_REG_CANCEL,
  CHARTBEAT_EVENT_REG_COMPLETE,
  CHARTBEAT_EVENT_REG_SHOWN,
  CHARTBEAT_EVENT_REG_START,
} from '@app/constants/chartbeat';
import {
  EVENT_CHARTBEAT_LOADED,
  EVENT_PIANO_READY,
} from '@app/constants/customEvents';
import { ID_MAIN_CONTENT_WRAPPER } from '@app/constants/ids';

import { trackChartbeat } from '../../chartbeat';
import { getCookie } from '../cookie';
import * as eventBindings from '../event-bindings';

jest.mock('../../chartbeat');
jest.mock('../cookie');

describe('eventBindings.js', () => {
  beforeEach(() => {
    jest.spyOn(eventBindings, 'addPassiveEventListener').mockImplementation();
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  describe('eventContextualInlineTopicClick()', () => {
    it('should bind click listener if it is a topic link', () => {
      document.body.innerHTML = `<div id="${ID_MAIN_CONTENT_WRAPPER}"><p>This is a sample <a href="/topic/bbc">link</a>.</p></div>`;

      eventBindings.eventContextualInlineTopicClick();
      expect(eventBindings.addPassiveEventListener).toHaveBeenCalledTimes(1);
      expect(eventBindings.addPassiveEventListener).toHaveBeenCalledWith(
        expect.anything(),
        'click',
        expect.any(Function),
      );
    });
    it('should not bind click listener if it is not a topic link', () => {
      document.body.innerHTML = `<div id="${ID_MAIN_CONTENT_WRAPPER}"><p>This is a sample <a href="/news/important-news-a123456.html">link</a>.</p></div>`;

      eventBindings.eventContextualInlineTopicClick();
      expect(eventBindings.addPassiveEventListener).toBeCalledTimes(0);
    });
  });

  describe('eventContextualInlineNonTopicClick()', () => {
    it('should not bind click listener if it is a topic link', () => {
      document.body.innerHTML = `<div id="${ID_MAIN_CONTENT_WRAPPER}"><p>This is a sample <a href="/topic/bbc">link</a>.</p></div>`;

      eventBindings.eventContextualInlineNonTopicClick();
      expect(eventBindings.addPassiveEventListener).toBeCalledTimes(0);
    });
    it('should bind click listener if it is not a topic link', () => {
      document.body.innerHTML = `<div id="${ID_MAIN_CONTENT_WRAPPER}"><p>This is a sample <a href="/news/important-news-a123456.html">link</a>.</p></div>`;

      eventBindings.eventContextualInlineNonTopicClick();
      expect(eventBindings.addPassiveEventListener).toHaveBeenCalledTimes(1);
      expect(eventBindings.addPassiveEventListener).toHaveBeenCalledWith(
        expect.anything(),
        'click',
        expect.any(Function),
      );
    });
  });

  describe('trackSubAndRegStartEventsViaChartbeat()', () => {
    const mockPianoReadyEvent = new CustomEvent(EVENT_PIANO_READY);
    const chartbeatEventParams = {
      eventLabel: '/', // default value in jsdom
      eventValue: 'Piano experience',
    };

    afterEach(() => {
      delete window.tp;
    });

    it('will not expose custom event logic before Piano has loaded', () => {
      jest.spyOn(document, 'addEventListener');
      eventBindings.trackSubAndRegStartEventsViaChartbeat();
      expect(window.tp).not.toBeDefined();
      expect(document.addEventListener).toHaveBeenCalledTimes(1);
      expect(document.addEventListener).toHaveBeenCalledWith(
        EVENT_PIANO_READY,
        expect.any(Function),
      );
      expect(window.tp).toMatchInlineSnapshot(`undefined`);
    });

    it('will expose custom event logic only once Piano has loaded', () => {
      eventBindings.trackSubAndRegStartEventsViaChartbeat();
      expect(window.tp).not.toBeDefined();
      document.dispatchEvent(mockPianoReadyEvent);
      expect(window.tp[0]).toMatchInlineSnapshot(`
        [
          "addHandler",
          "customEvent",
          [Function],
        ]
      `);
    });

    it('will not track data via Chartbeat if custom event params are undefined', () => {
      eventBindings.trackSubAndRegStartEventsViaChartbeat();
      document.dispatchEvent(mockPianoReadyEvent);
      const customEventHandler = window.tp[0][2];
      customEventHandler({});
      expect(trackChartbeat).not.toHaveBeenCalled();
    });

    it('will not track data via Chartbeat if no Chartbeat event data is provided', () => {
      eventBindings.trackSubAndRegStartEventsViaChartbeat();
      document.dispatchEvent(mockPianoReadyEvent);
      const customEventHandler = window.tp[0][2];
      customEventHandler({ params: {} });
      expect(trackChartbeat).not.toHaveBeenCalled();
    });

    it('will track registration data via Chartbeat if defined within custom event params', () => {
      eventBindings.trackSubAndRegStartEventsViaChartbeat();
      document.dispatchEvent(mockPianoReadyEvent);
      const customEventHandler = window.tp[0][2];
      customEventHandler({ params: { chartbeat: 'register' } });
      expect(trackChartbeat).toHaveBeenCalledTimes(1);
      expect(trackChartbeat).toHaveBeenCalledWith(
        CHARTBEAT_EVENT_REG_START,
        chartbeatEventParams,
      );
    });

    it('will track subscription data via Chartbeat if defined within custom event params', () => {
      eventBindings.trackSubAndRegStartEventsViaChartbeat();
      document.dispatchEvent(mockPianoReadyEvent);
      const customEventHandler = window.tp[0][2];
      customEventHandler({ params: { chartbeat: 'subscribe' } });
      expect(trackChartbeat).toHaveBeenCalledTimes(1);
      expect(trackChartbeat).toHaveBeenCalledWith(
        CHARTBEAT_EVENT_PAYWALL_START,
        chartbeatEventParams,
      );
    });
  });

  describe('trackAmpNscEventsViaChartbeat()', () => {
    const formId = 'reg-lite-form';
    const emailFieldId = 'reg-lite--form-email';
    const mockBodyHtml = `
    <form id="${formId}">
      <input id="${emailFieldId}" />
      <input name="regSourceNewsletter" value="test-reg-source-newsletter" />
      <div submit-success="true"></div>
    </form>
  `;
    const registrationChartbeatData = {
      eventLabel: '/', // default value in jsdom
      eventValue: 'Nsc',
    };
    const newsletterChartbeatData = {
      eventLabel: '/',
      eventValue: 'test-reg-source-newsletter',
    };

    beforeEach(() => {
      jest.spyOn(document, 'addEventListener');
    });

    afterEach(() => {
      document.body.innerHTML = '';
    });

    it('will not setup event listeners when user is logged in', () => {
      getCookie.mockReturnValueOnce(true);
      eventBindings.trackAmpNscEventsViaChartbeat();
      expect(document.addEventListener).not.toHaveBeenCalled();
    });

    it('will not setup event listeners if no nsc form is found', () => {
      getCookie.mockReturnValueOnce(null);
      eventBindings.trackAmpNscEventsViaChartbeat();
      expect(document.addEventListener).not.toHaveBeenCalled();
    });

    it('will not setup event listeners if React nsc form is found', () => {
      document.body.innerHTML = `<div role="form" id="${formId}"></div>`;
      getCookie.mockReturnValueOnce(null);
      eventBindings.trackAmpNscEventsViaChartbeat();
      expect(document.addEventListener).not.toHaveBeenCalled();
    });

    it('will track register and newsletter shown events via Chartbeat when amp nsc form is found and chartbeat has loaded', () => {
      document.body.innerHTML = mockBodyHtml;
      getCookie.mockReturnValueOnce(null);
      eventBindings.trackAmpNscEventsViaChartbeat();
      document.dispatchEvent(new CustomEvent(EVENT_CHARTBEAT_LOADED));
      expect(trackChartbeat).toHaveBeenCalledTimes(2);
      expect(trackChartbeat).toHaveBeenNthCalledWith(
        1,
        CHARTBEAT_EVENT_REG_SHOWN,
        registrationChartbeatData,
      );
      expect(trackChartbeat).toHaveBeenNthCalledWith(
        2,
        CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_SHOWN,
        newsletterChartbeatData,
      );
    });

    it('will track register and newsletter start events via Chartbeat only when email field is first focused', () => {
      document.body.innerHTML = mockBodyHtml;
      getCookie.mockReturnValueOnce(null);

      eventBindings.trackAmpNscEventsViaChartbeat();

      const emailInput = document.getElementById(emailFieldId);
      jest.spyOn(emailInput, 'removeEventListener');
      emailInput.dispatchEvent(new Event('focus'));

      expect(trackChartbeat).toHaveBeenCalledTimes(2);
      expect(trackChartbeat).toHaveBeenNthCalledWith(
        1,
        CHARTBEAT_EVENT_REG_START,
        registrationChartbeatData,
      );
      expect(trackChartbeat).toHaveBeenNthCalledWith(
        2,
        CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_START,
        newsletterChartbeatData,
      );
      expect(emailInput.removeEventListener).toHaveBeenCalledTimes(1);
      expect(emailInput.removeEventListener).toHaveBeenCalledWith(
        'focus',
        expect.any(Function),
      );
    });

    it('will track register and newsletter cancel events via Chartbeat only when document is hidden on visibilitychange', () => {
      const visibilitychangeEvent = new Event('visibilitychange');
      document.body.innerHTML = mockBodyHtml;
      getCookie.mockReturnValueOnce(null);

      eventBindings.trackAmpNscEventsViaChartbeat();

      document.dispatchEvent(visibilitychangeEvent);

      expect(trackChartbeat).not.toHaveBeenCalled();

      jest.spyOn(document, 'visibilityState', 'get').mockReturnValue('hidden');

      document.dispatchEvent(visibilitychangeEvent);

      expect(trackChartbeat).toHaveBeenCalled();

      expect(trackChartbeat).toHaveBeenNthCalledWith(
        1,
        CHARTBEAT_EVENT_REG_CANCEL,
        registrationChartbeatData,
      );
      expect(trackChartbeat).toHaveBeenNthCalledWith(
        2,
        CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_CANCEL,
        newsletterChartbeatData,
      );
    });

    it('will track register and newsletter complete events via Chartbeat only when success message is visible', async () => {
      jest.spyOn(MutationObserver.prototype, 'observe');
      jest.spyOn(MutationObserver.prototype, 'disconnect');
      jest.spyOn(document, 'removeEventListener');
      document.body.innerHTML = mockBodyHtml;
      getCookie.mockReturnValueOnce(null);

      eventBindings.trackAmpNscEventsViaChartbeat();

      expect(MutationObserver.prototype.observe).toHaveBeenCalledTimes(1);
      expect(MutationObserver.prototype.observe.mock.calls[0])
        .toMatchInlineSnapshot(`
        [
          <div
            submit-success="true"
          />,
          {
            "attributes": true,
          },
        ]
      `);

      const successMessage = document.querySelector(
        `#${formId} div[submit-success="true"]`,
      );
      successMessage.style.display = 'block';

      // https://stackoverflow.com/questions/48809753/testing-mutationobserver-with-jest
      // puts the new promise at the end on microtask queue and holds the test execution until it is resolved. This allows for the MutationObserver callback, which was put on the microtask queue before our promise, to be executed and make changes that we expect.
      await new Promise(process.nextTick);

      expect(trackChartbeat).toHaveBeenCalledTimes(2);
      expect(trackChartbeat).toHaveBeenNthCalledWith(
        1,
        CHARTBEAT_EVENT_REG_COMPLETE,
        registrationChartbeatData,
      );
      expect(trackChartbeat).toHaveBeenNthCalledWith(
        2,
        CHARTBEAT_EVENT_NEWSLETTER_SIGNUP_COMPLETE,
        newsletterChartbeatData,
      );
      expect(document.removeEventListener).toHaveBeenCalledTimes(1);
      expect(document.removeEventListener).toHaveBeenCalledWith(
        'visibilitychange',
        expect.any(Function),
      );
      expect(MutationObserver.prototype.disconnect).toHaveBeenCalledTimes(1);
    });
  });
});
