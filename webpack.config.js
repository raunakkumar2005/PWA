// module.exports = {
//    // ...the rest of your config

//    resolve: {
//      alias: {
//        'react-native$': 'react-native-web'
//      }
//    }
//  }
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ],
            plugins: [
              '@babel/plugin-transform-flow-strip-types'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
};

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx|ts|tsx)$/,
//         // exclude: /node_modules/,
//         exclude: /node_modules\/(?!(react-native-vector-icons)\/).*/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             configFile: path.resolve(__dirname, 'babel.config.js'),
//             presets: [
//               "@babel/preset-env",
//               "@babel/preset-react",
//               "@babel/plugin-syntax-jsx"
//             ]
//           }
//         }
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['.js', '.jsx', '.ts', '.tsx'],
//     alias: {
//       'react-native$': 'react-native-web'
//     }
//   },
// };

//use
// module.exports = {
//   mode: 'development', // or 'production' or 'none'
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(png|jpe?g|gif|svg)$/, // Add rule for image files
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               name: '[path][name].[ext]', // Preserve original file name and path
//               context: path.resolve(__dirname, 'src'), // Preserve original path from 'src'
//             },
//           },
//         ],
//       },
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: [
//               '@babel/preset-env',
//               '@babel/preset-react',
//               '@babel/preset-typescript',
//               // 'es2015'
//             ],
//             plugins: [
//               '@babel/plugin-syntax-jsx',
//               ['@babel/plugin-proposal-class-properties', { loose: true }],
//               ['@babel/plugin-proposal-private-methods', { loose: true }],
//               ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
//             ]
//           },
//         },
//       },
//       {
//         // test: /\.tsx?$/, // Add rule for TypeScript files
//         test: /\.(tsx|ts)$/,
//         use: [
//           {
//             loader: 'ts-loader',
//             options: {
//               // Allow TypeScript files in node_modules to be compiled
//               allowTsInNodeModules: true,
//             },
//           },
//         ],
//         // exclude: /node_modules/,
//       }
//     ],

//   },
//   resolve: {
//     extensions: ['.js', '.jsx', '.ts', '.tsx'],
//     alias: {
//       'react-native$': 'react-native-web'
//     }
//   },
//   // devServer: {
//   //   contentBase: path.join(__dirname, 'dist'),
//   //   compress: true,
//   //   port: 9000
//   // }
// };

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         // exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react']
//           }
//         }
//       },
//       {
//         test: /\.(ts|tsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'ts-loader'
//         }
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['.js', '.jsx', '.ts', '.tsx']
//   }
// };

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx|ts|tsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: [
//               'module:@react-native/babel-preset',
//               '@babel/preset-react'
//             ]
//           }
//         }
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['.js', '.jsx', '.ts', '.tsx']
//   }
// };
