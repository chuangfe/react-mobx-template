const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  reactScriptsVersion: 'react-scripts',
  eslint: {
    enable: false
  },
  babel: {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
          corejs: 3
        }
      ]
    ],
    plugins: [
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true
        }
      ],
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: false
        }
      ],
      '@babel/plugin-transform-runtime'
    ],
    loaderOptions: (babelLoaderOptions, { env, paths }) => {
      return babelLoaderOptions;
    }
  },
  webpack: {
    alias: {},
    plugins: {
      add: [
        new ESLintPlugin({
          extensions: ['js', 'jsx'],
          failOnError: false,
          emitWarning: true
        })
      ],
      remove: []
    },
    configure: (webpackConfig, { env, paths }) => {
      return webpackConfig;
    }
  },
  plugins: []
};
