// vue.config.js
module.exports = {
    devServer: {
      proxy: {
        // Mobile API Proxy
        '/beers': {
          target: 'https://api.punkapi.com/v2/beers',
          changeOrigin: true,
        },
      },
    },
  };