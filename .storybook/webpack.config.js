const path = require('path');
module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader')
  });
  config.resolve.alias = {
    '~': path.resolve(__dirname, '../src')
  };
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
