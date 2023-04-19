const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query {
        me: User
        user(id: Int!): User
        users: [User]
    }
    
    type User {
        id: ID!
        name: String!,
        vehicles: [Car]
    }
    
    extend type Mutation {
        makeUser(id: Int!, name: String!): User!
        removeUser(id: Int!): Boolean
    }
    
`;