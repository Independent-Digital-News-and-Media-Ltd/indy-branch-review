/**
 * @jest-environment jsdom
 */

import { getCookie } from '../../cookie';
import { identifyUser } from '../identifyUser';

jest.mock('../../cookie');

beforeEach(() => {
  window.permutive = {
    identify: jest.fn(),
  };
  getCookie.mockReset();
});

afterEach(() => {
  delete window.permutive;
});

describe('identifyingUsers', () => {
  it('should set Piano id for login user', () => {
    getCookie.mockImplementation((name) => {
      return {
        esi_puid: 'the-piano-id',
        hashed_email: 'boris@example.test',
      }[name];
    });
    identifyUser();
    expect(window.permutive.identify).toHaveBeenCalledWith([
      {
        id: 'boris@example.test',
        priority: 0,
        tag: 'user_email',
      },
      {
        id: 'boris@example.test',
        priority: 1,
        tag: 'email_sha256',
      },
      {
        id: 'the-piano-id',
        priority: 2,
        tag: 'piano_id',
      },
    ]);
  });

  it('should set permutive generated id for guest', () => {
    window.permutive.context = {
      user_id: 'test-user-id',
    };
    getCookie.mockReturnValue(null);
    identifyUser();
    expect(window.permutive.identify).toHaveBeenCalledWith([
      {
        id: 'test-user-id',
        priority: 3,
        tag: 'permutive_id',
      },
    ]);
  });
});
