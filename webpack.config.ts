import * as webpack from 'webpack';
import * as path from 'path';
declare var __dirname: any;

const config: webpack.Configuration = {
  entry: './src/foo.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      loader: 'awesome-typescript-loader'
    }]
  }
};

export default config;
