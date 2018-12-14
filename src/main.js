import Vue from 'vue'
import Main from './pages/Main'
import VueApollo from 'apollo-boost'


Vue.config.productionTip = false

const apolloProvider = new VueApollo.ApolloProvider({
  // defaultClient: url_here,
})

const POSTS_QUERY = Apollo.gql `
{
  movies {
    id
    title
  }
}`

new Vue({
  render: h => h(Main),

  // Apollo GraphQL
  apolloProvider,
  apollo: {
    posts: {
      query: POSTS_QUERY,
      loadingKey: 'loading',
    },
  },
}).$mount('#app')
