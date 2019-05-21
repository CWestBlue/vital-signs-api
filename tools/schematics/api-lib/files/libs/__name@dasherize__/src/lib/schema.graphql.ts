import gql from 'graphql-tag';
export const typeDefs = gql`
type Query {
    customItems: [Item]
}
`;

export const sdl = `
    type Item @GQLifyModel(dataSource: "memory", key: "items") {
        name: String
        type: String
        id: String @unique
    }
`