import { Gqlify, MemoryDataSource } from '@gqlify/server';
import * as admin from 'firebase-admin';
import { sdl } from './schema.graphql';

// Read datamodel
// const sdl = readFileSync(__dirname + '/demo.graphql', {
//   encoding: 'utf8'
// });

// console.log(sdl);

const defaultData = {
    items: [
        { id: '1', name: 'blue', type: 'color' },
        { id: '2', name: 'black', type: 'color' },
        { id: '3', name: 'purple', type: 'color' },
        { id: '4', name: 'yellow', type: 'color' }
    ]
}

const gqlify = new Gqlify({
    // provide data-sources map to GQLify,
    // so GQLify would know how to create data-source for each model
    dataSources: {
        memory: args => new MemoryDataSource(defaultData[args.key]),
    },
    // provide datamodel to gqlify
    sdl
});

// console.log(gqlify);

export const gqlifyConfig = gqlify.createApolloConfig();

// console.log(gqlifyConfig);