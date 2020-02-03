import { GraphQLString, GraphQLInt } from 'graphql';

// App import
import Kungfu from "./types";
import KungfuType from './types';
import { create, update, remove } from './resolvers';

export const kungfuCreate = {
    type: KungfuType,
    args: {
        name: {
            name: 'name',
            type: GraphQLString
        },
        description: {
            name: 'description',
            type: GraphQLString
        }
    },
    resolve: create
}

export const kungfuUpdate = {
    type: KungfuType,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt
        },

        name: {
            name: 'name',
            type: GraphQLString
        },

        description: {
            name: 'description',
            type: GraphQLString
        }
    },
    resolve: update
}

export const kungfuRemove = {
    type: KungfuType,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt
        }

    },
    resolve: remove
}