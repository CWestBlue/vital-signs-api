import gql from 'graphql-tag';
export const typeDefs = gql`
type Query {
    # customItems: [Item]
    items: [Item]
}
type Item {
    name: String
    type: String
    health: String
    growth: String
    _id: String
    stream: String
    history: [History]
}
type History {
    month: String
    current: String
}
`;

export const sdl = `
    type Item @GQLifyModel(dataSource: "mongodb", key: "items") {
        name: String
        type: String
        health: String
        growth: String
        _id: String @unique
    }
    
`