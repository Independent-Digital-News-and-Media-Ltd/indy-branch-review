/**
 * @jest-environment jsdom
 */

import 'jest-location-mock';

import {
  SUBSCRIBER_ORIGIN_OTHERS,
  SUBSCRIBER_ORIGIN_UK,
} from '@app/constants/subscriberOrigin';

import { redirectStudentToSelectedSubscription } from '@app/public/js/student-verify';
import { getSubscriberOriginOnClient } from '@app/public/js/utils/getSubscriberOriginOnClient';
import { InternalApi } from '@app/public/js/utils/internalApi';
import { buildSubscriptionRedirectUrl } from '@app/util/buildSubscriptionRedirectUrl';

jest.mock('@app/public/js/utils/getSubscriberOriginOnClient');
jest.mock('@app/public/js/utils/internalApi');
jest.mock('@app/util/buildSubscriptionRedirectUrl');

describe('student-verify module', () => {
  const localStorageKey = 'studentRedirectUrl';
  const subscribePagePath = '/subscribe';
  const studentMappingsPath = 'subscription/student-template-mappings';
  const testUrl = 'https://independent.co.uk/test-url';
  const jsonMock = { json: jest.fn() };

  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(),
    },
  });

  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  it('will redirect to saved redirect url in local storage if present', async () => {
    window.localStorage.getItem.mockReturnValue(testUrl);
    getSubscriberOriginOnClient.mockReturnValue(SUBSCRIBER_ORIGIN_UK);

    await redirectStudentToSelectedSubscription();

    expect(window.location).toBeAt(testUrl);
    expect(window.localStorage.getItem).toHaveBeenCalledWith(localStorageKey);
    expect(getSubscriberOriginOnClient).toHaveBeenCalled();
  });

  it('will redirect to subscribe page if no redirect url saved in local storage and fails to fetch student template mappings to build new url', async () => {
    const testErrorObject = { message: 'test-error-message' };
    window.localStorage.getItem.mockReturnValue(null);
    getSubscriberOriginOnClient.mockReturnValue(SUBSCRIBER_ORIGIN_UK);
    InternalApi.get.mockResolvedValue({
      ...jsonMock,
      ok: false,
    });
    jsonMock.json.mockResolvedValue(testErrorObject);

    await redirectStudentToSelectedSubscription();

    expect(window.location).toBeAt(subscribePagePath);
    expect(window.localStorage.getItem).toHaveBeenCalledWith(localStorageKey);
    expect(getSubscriberOriginOnClient).toHaveBeenCalled();
    expect(InternalApi.get).toHaveBeenCalledWith(studentMappingsPath);
    expect(jsonMock.json).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(
      expect.objectContaining(testErrorObject),
    );
  });

  it('will redirect to built subscription url if no redirect url saved in local storage and succeeds in fetching student template mappings', async () => {
    const mockOfferId = 'test-offer-id';
    const mockTermId = 'test-tide-annual-term-id';
    window.localStorage.getItem.mockReturnValue(null);
    getSubscriberOriginOnClient.mockReturnValue(SUBSCRIBER_ORIGIN_UK);
    InternalApi.get.mockResolvedValue({
      ...jsonMock,
      ok: true,
    });
    jsonMock.json.mockResolvedValue({
      offerid: mockOfferId,
      'tide-annual-term-id': mockTermId,
    });
    buildSubscriptionRedirectUrl.mockReturnValue(testUrl);

    await redirectStudentToSelectedSubscription();

    expect(window.location).toBeAt(testUrl);
    expect(window.localStorage.getItem).toHaveBeenCalledWith(localStorageKey);
    expect(getSubscriberOriginOnClient).toHaveBeenCalled();
    expect(InternalApi.get).toHaveBeenCalledWith(studentMappingsPath);
    expect(jsonMock.json).toHaveBeenCalledTimes(1);
    expect(buildSubscriptionRedirectUrl).toHaveBeenCalledWith({
      offerId: mockOfferId,
      termId: mockTermId,
    });
  });

  it('will redirect to subscribe page if no redirect url saved in local storage and visiting from unsupported region', async () => {
    window.localStorage.getItem.mockReturnValue(null);
    getSubscriberOriginOnClient.mockReturnValue(SUBSCRIBER_ORIGIN_OTHERS);

    await redirectStudentToSelectedSubscription();

    expect(window.location).toBeAt(subscribePagePath);
    expect(window.localStorage.getItem).toHaveBeenCalledWith(localStorageKey);
    expect(getSubscriberOriginOnClient).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(
      expect.objectContaining({ message: 'Unsupported region.' }),
    );
  });
});
