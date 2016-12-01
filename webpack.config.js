module.exports = {
  entry: './main.js',

  output: {
    path: './public',
    filename: 'bundle.js',
    publicPath: '/public'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
