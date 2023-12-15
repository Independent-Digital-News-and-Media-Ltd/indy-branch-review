/**
 * @jest-environment jsdom
 */

import { getVideoPlacementValue } from '@app/config/vendors/helpers/prebid';

import { prebidAdConfig, formatBids } from '../prebid';

const mockBidders = [
  (() => {
    const adIds = {
      ad1: {
        web: 'bidder1_id01',
      },
      ad2: {
        web: 'bidder1_id02',
      },
      mpu4: {
        web: 'bidder1_id03',
      },
    };
    const params = ({ id }) => {
      const data = adIds[id];
      return data ? { bidder: 'bidder1' } : null;
    };
    return {
      params,
    };
  })(),
  (() => {
    const adIds = {
      ad1: {
        web: 'bidder2_id01',
      },
      ad2: {
        web: 'bidder2_id02',
      },
      mpu3: {
        web: 'bidder2_id03',
      },
    };
    const params = ({ id }) => {
      const data = adIds[id];
      return data ? { bidder: 'bidder2' } : null;
    };
    return {
      params,
    };
  })(),
  (() => {
    const excludedAdIds = ['ad1'];
    const params = ({ id }) => {
      return excludedAdIds.includes(id) ? null : { bidder: 'bidder3' };
    };
    return {
      params,
    };
  })(),
];

describe('prebid functions', () => {
  describe('formatBids()', () => {
    const nonExcludedAdIds = 'ad2';
    const excludedAdIds = 'ad1';
    const resultNonExcludedBidders = [
      {
        bidder: 'bidder1',
      },
      {
        bidder: 'bidder2',
      },
      {
        bidder: 'bidder3',
      },
    ];
    const resultExcludedBidders = [
      {
        bidder: 'bidder1',
      },
      {
        bidder: 'bidder2',
      },
    ];

    it('returns bidders if it has params', () => {
      const bids = formatBids({ id: nonExcludedAdIds, bidders: mockBidders });
      expect(bids).toEqual(resultNonExcludedBidders);
    });

    it('returns bidders if it does not have params', () => {
      const bids = formatBids({ id: excludedAdIds, bidders: mockBidders });
      expect(bids).toEqual(resultExcludedBidders);
    });
  });

  describe('prebidAdConfig()', () => {
    it('returns correctly formatted object', () => {
      global.JSGlobals = {};
      let adsList = [
        {
          id: 'ad1',
          sizes: [{ from: 0, supportedSizes: [[300, 250]] }],
        },
        {
          id: 'mpu3',
          sizes: [{ from: 0, supportedSizes: [[300, 250]] }],
        },
        {
          id: 'mpu4',
          sizes: [{ from: 0, supportedSizes: [[300, 250]] }],
        },
      ];

      const config = prebidAdConfig(adsList, mockBidders);
      expect(config).toMatchInlineSnapshot(`
        [
          {
            "bids": [
              {
                "bidder": "bidder1",
              },
              {
                "bidder": "bidder2",
              },
            ],
            "code": "ad1",
            "mediaTypes": {
              "banner": {
                "sizeConfig": [
                  {
                    "minViewPort": [
                      0,
                      0,
                    ],
                    "sizes": [
                      [
                        300,
                        250,
                      ],
                    ],
                  },
                ],
              },
            },
          },
          {
            "bids": [
              {
                "bidder": "bidder2",
              },
              {
                "bidder": "bidder3",
              },
            ],
            "code": "mpu3",
            "mediaTypes": {
              "banner": {
                "sizeConfig": [
                  {
                    "minViewPort": [
                      0,
                      0,
                    ],
                    "sizes": [
                      [
                        300,
                        250,
                      ],
                    ],
                  },
                ],
              },
            },
          },
          {
            "bids": [
              {
                "bidder": "bidder1",
              },
              {
                "bidder": "bidder3",
              },
            ],
            "code": "mpu4",
            "mediaTypes": {
              "banner": {
                "sizeConfig": [
                  {
                    "minViewPort": [
                      0,
                      0,
                    ],
                    "sizes": [
                      [
                        300,
                        250,
                      ],
                    ],
                  },
                ],
              },
            },
          },
        ]
      `);
    });
  });

  describe('getVideoPlacementValue', () => {
    it.each([
      {
        hasVideoSignal: true,
        isSport: true,
        isTravel: false,
        expectedOutput: 1,
        description: '1 if hasVideoSignal is true and isSport is true',
      },
      {
        hasVideoSignal: false,
        isSport: false,
        isTravel: true,
        expectedOutput: 2,
        description: '2 if hasVideoSignal is false and isTravel is true',
      },
      {
        hasVideoSignal: false,
        isSport: false,
        isTravel: false,
        expectedOutput: undefined,
        description: 'undefined if neither condition is met',
      },
    ])(
      'should return $description',
      ({ hasVideoSignal, isSport, isTravel, expectedOutput }) => {
        global.JSGlobals = {
          article: { isSport, isTravel },
          prebid: { hasVideoSignal },
        };

        expect(getVideoPlacementValue()).toBe(expectedOutput);
      },
    );
  });
});
