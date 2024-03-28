/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://www.independent.co.uk/"}
 */

import { ID_MAIN_CONTENT_WRAPPER } from '@app/constants/ids';

import * as eventBindings from '../event-bindings';

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
});
