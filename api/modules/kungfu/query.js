import { GraphQLList, GraphQLString, GraphQLInt } from "graphql";
import KungfuType from "./types";
import { getAll, getById } from "./resolvers";


export const kungfus = {
    type: new GraphQLList(KungfuType),
    agrs: {
        orderBy: { type: GraphQLString }
    },
    resolve: getAll
}

export const kungfuById = {
    type: KungfuType,
    args: {
        kungfuId: { type: GraphQLInt }
    },
    resolve: getById
}