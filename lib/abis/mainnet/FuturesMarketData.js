export default [
  {
    constant: true,
    inputs: [
      {
        internalType: 'contract FuturesMarket',
        name: 'market',
        type: 'address',
      },
    ],
    name: 'marketDetails',
    outputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'baseAsset',
            type: 'bytes32',
          },
          {
            internalType: 'uint256',
            name: 'exchangeFee',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'maxLeverage',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maxTotalMargin',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'minInitialMargin',
                type: 'uint256',
              },
            ],
            internalType: 'struct FuturesMarketData.MarketLimits',
            name: 'limits',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'maxFundingRate',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maxFundingRateSkew',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maxFundingRateDelta',
                type: 'uint256',
              },
            ],
            internalType: 'struct FuturesMarket.FundingParameters',
            name: 'fundingParameters',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'marketSize',
                type: 'uint256',
              },
              {
                components: [
                  {
                    internalType: 'uint256',
                    name: 'short',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'long',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct FuturesMarketData.Sides',
                name: 'sides',
                type: 'tuple',
              },
              {
                internalType: 'uint256',
                name: 'marketDebt',
                type: 'uint256',
              },
              {
                internalType: 'int256',
                name: 'marketSkew',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'proportionalSkew',
                type: 'int256',
              },
              {
                internalType: 'int256',
                name: 'entryMarginMinusNotionalSkewSum',
                type: 'int256',
              },
              {
                internalType: 'uint256',
                name: 'pendingOrderValue',
                type: 'uint256',
              },
            ],
            internalType: 'struct FuturesMarketData.MarketSizeDetails',
            name: 'marketSizeDetails',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'price',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'currentRoundId',
                type: 'uint256',
              },
              { internalType: 'bool', name: 'isInvalid', type: 'bool' },
            ],
            internalType: 'struct FuturesMarketData.PriceDetails',
            name: 'priceDetails',
            type: 'tuple',
          },
        ],
        internalType: 'struct FuturesMarketData.MarketData',
        name: '',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x730e0037',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'contract FuturesMarket',
        name: 'market',
        type: 'address',
      },
      { internalType: 'address', name: 'account', type: 'address' },
    ],
    name: 'positionDetails',
    outputs: [
      {
        components: [
          {
            components: [
              { internalType: 'bool', name: 'pending', type: 'bool' },
              {
                internalType: 'int256',
                name: 'margin',
                type: 'int256',
              },
              {
                internalType: 'uint256',
                name: 'leverage',
                type: 'uint256',
              },
              { internalType: 'uint256', name: 'fee', type: 'uint256' },
              {
                internalType: 'uint256',
                name: 'roundId',
                type: 'uint256',
              },
            ],
            internalType: 'struct FuturesMarket.Order',
            name: 'order',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'int256',
                name: 'margin',
                type: 'int256',
              },
              { internalType: 'int256', name: 'size', type: 'int256' },
              {
                internalType: 'uint256',
                name: 'entryPrice',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'entryIndex',
                type: 'uint256',
              },
            ],
            internalType: 'struct FuturesMarket.Position',
            name: 'position',
            type: 'tuple',
          },
          {
            internalType: 'int256',
            name: 'notionalValue',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'profitLoss',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'accruedFunding',
            type: 'int256',
          },
          {
            internalType: 'int256',
            name: 'remainingMargin',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'liquidationPrice',
            type: 'uint256',
          },
        ],
        internalType: 'struct FuturesMarketData.PositionData',
        name: '',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x808bad34',
  },
];