var path = require("path")

module.exports = {
  outputDir: path.resolve(__dirname,"../backend/public/"),
  devServer:{
    proxy:{
      '/api':{
        taget:'http://localhost:3000/api',
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
