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
    periodOfMeasure: String
    mathType: String
    historyMathType: String
    newSetEachMeasure: Boolean
    customUpdates: [CustomUpdate]
    history: [History]
}
type History {
    date: String
    current: String
    growth: String
    healthy: String
}

type CustomUpdate {
    date: String
    health: String
    growth: String
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