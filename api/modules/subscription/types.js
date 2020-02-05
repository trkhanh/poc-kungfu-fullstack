// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from '../user/types'
import KungfuType from '../kungfu/types
// Subscription type
const SubscriptionType = new GraphQLObjectType({
  name: 'subscription',
  description: 'Subscription Type',

  fields: () => ({
    id: { type: GraphQLInt },
    user: { type: UserType },
    kungfu: { type: KungfuType },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default SubscriptionType