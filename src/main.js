import Vue from 'vue'
import Main from './pages/Main'
import VueApollo from "vue-apollo"
import { ApolloClient } from 'apollo-client'
import { RestLink } from 'apollo-link-rest'
import { InMemoryCache } from 'apollo-cache-inmemory'
// HTTP connexion to the API
const httpLink = new RestLink({
  // You should use an absolute URL here
  uri: 'https://api.punkapi.com/v2/'
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.config.productionTip = false

new Vue({
  render: h => h(Main),
  apolloProvider
}).$mount('#app')
