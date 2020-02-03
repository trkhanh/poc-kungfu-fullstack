import { GraphQLObjectType, GraphQLInt, GraphQLString, } from 'graphql'

const KungfuType = new GraphQLObjectType({
    name: 'kungfu',
    description: 'kungfu type',

    field: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString }
    })
})

export default KungfuType