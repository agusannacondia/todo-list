import webpack from 'webpack'
import dotenv from 'dotenv'

export default {
  plugins: [
    new webpack.DefinePlugin({
       'process.env': JSON.stringify(dotenv.config().parsed)
    })
  ]
}