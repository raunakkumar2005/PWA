// module.exports = {
//     presets: [
//         'module:@react-native/babel-preset',
//         '@babel/preset-react'
//     ],
//     plugins: [
//         ['module-resolver', {
//             alias: {
//                 '^react-native$': 'react-native-web'
//             }
//         }]
//     ]
// };


// module.exports = {
//     presets: [
//         'module:metro-react-native-babel-preset',
//          '@babel/preset-react',
//          '@babel/preset-env',
//          '@babel/preset-typescript',
//         //  'react-app'
//         ],
//     plugins: [
//         'react-native-config-node/transform',
//         "@babel/plugin-syntax-jsx",
//         ['@babel/plugin-proposal-class-properties', { loose: true }],
//         ['@babel/plugin-proposal-private-methods', { loose: true }],
//         ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
//     ]
// };

module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    '@babel/preset-react',
    '@babel/preset-env',
    '@babel/preset-typescript'
  ],
  "plugins": [
    ["module-resolver", {
      "alias": {
        "^react-native$": "react-native-web"
      }
    }],
    '@babel/plugin-syntax-jsx',
    '@babel/plugin-transform-flow-strip-types'
  ]
};

