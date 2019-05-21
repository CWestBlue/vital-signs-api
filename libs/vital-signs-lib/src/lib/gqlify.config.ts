import { Gqlify, MemoryDataSource } from '@gqlify/server';
import { MongodbDataSourceGroup } from '@gqlify/mongodb'
import { sdl } from './schema.graphql';

const mongoUri = process.env.MONGO_URI;
// Read datamodel
// const sdl = readFileSync(__dirname + '/demo.graphql', {
//   encoding: 'utf8'
// });

// console.log(sdl);


const mongodbSourceGroup = new MongodbDataSourceGroup(mongoUri, 'kingwood');

const defaultData = {
    items: [
        { id: '1', name: 'blue', type: 'color' },
        { id: '2', name: 'black', type: 'color' },
        { id: '3', name: 'purple', type: 'color' },
        { id: '4', name: 'yellow', type: 'color' }
    ]
}
export const createGql = async () => {


    await mongodbSourceGroup.initialize();
    const gqlify = new Gqlify({
        // provide data-sources map to GQLify,
        // so GQLify would know how to create data-source for each model
        dataSources: {
            // memory: args => new MemoryDataSource(defaultData[args.key]),
            mongodb: args => mongodbSourceGroup.getDataSource(args.key)
        },
        // provide datamodel to gqlify
        sdl
    });
    return gqlify.createApolloConfig();
}

// console.log(gqlifyConfig);