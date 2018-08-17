const path = require('path');
module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader')
  });
  config.resolve.alias = {
    app: path.resolve(__dirname, '../src', 'app'),
    assets: path.resolve(__dirname, '../src', 'assets'),
    ducks: path.resolve(__dirname, '../src', 'ducks'),
    resources: path.resolve(__dirname, '../src', 'resources'),
    styles: path.resolve(__dirname, '../src', 'styles'),
    utils: path.resolve(__dirname, '../src', 'utils'),
    views: path.resolve(__dirname, '../src', 'views')
  };
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
