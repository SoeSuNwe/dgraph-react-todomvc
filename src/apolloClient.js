import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  uri: 'https://blue-surf-1160028.us-east-1.aws.cloud.dgraph.io/graphql',
  cache: new InMemoryCache(),
})