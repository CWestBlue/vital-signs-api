import { GraphQLModule } from '@graphql-modules/core';
import 'graphql-import-node';
import resolvers from './resolvers';
import { ItemsService } from './providers';
import { typeDefs } from './schema.graphql';
import { gqlifyConfig } from './gqlify.config';

const stitchedRes = stitcheResolvers(resolvers, gqlifyConfig.resolvers);
const stitchedTypes = stitchTypeDefs(gqlifyConfig.typeDefs, typeDefs);


export const <%= classify(name + 'Module') %> = new GraphQLModule({
    providers: [ItemsService],
    name: <% name %>,
    resolvers: stitchedRes,
    typeDefs: stitchedTypes
});


export function stitcheResolvers(generatedResolvers, customResolvers) {
    const types = ['Query', 'Mutation'];
    const combinedResolvers = {};
    types.forEach(type => {
        combinedResolvers[type] = {
            ...generatedResolvers[type],
            ...customResolvers[type]
        }
    });
    return combinedResolvers;
}

export function stitchTypeDefs(typeDef1, typeDef2) {
    const returnDef = typeDef1;
    returnDef.definitions = [...typeDef1.definitions, ...typeDef2.definitions];
    return returnDef;
}
