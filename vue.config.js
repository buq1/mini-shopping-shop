const path = require('path')
function resolve(dir){
  return path.join(__dirname,'..',dir)
}
module.exports={
  configureWebpack:{
     resolve:{
      extensions:['.js','.vue','.json'],
      alias:{
        'vue$':'vue/dist/vue.esm.js',
        '@':resolve('src'),
      }
     }
  },
}
