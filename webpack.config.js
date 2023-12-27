let path = require('path');

let projectRootDir = process.cwd();
let sourceFolder = 'src';
let outputFolder = 'app';

module.exports = (mode = 'production') => ({
  //entry: path.join(projectRootDir, sourceFolder, 'index.tsx'),
  entry: {
    background: './src/background.ts',
    main: path.join(projectRootDir, sourceFolder, 'index.tsx'),
    modal: path.join(projectRootDir, sourceFolder, 'modal.tsx')
  },
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    path: path.join(projectRootDir, outputFolder),
    publicPath: './'
  },
  mode: 'production',
  resolve: {
    extensions: ['.tsx', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/,
        use: ['url-loader?limit=1000&name=./img/[name].[ext]']
      },
      {
        test: /\.woff2|\.woff$|\.ttf$|\.eot$/,
        use: ['url-loader?limit=1000&name=./fonts/[name].[ext]']
      },
      {
        test: /\.svg$/,
        use: ['url-loader?limit=1&name=./fonts/[name].[ext]']
      }
    ]
  }
});
