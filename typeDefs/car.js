const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query {
        car(id: Int!): Car
        cars: [Car]
    }
    
    type Car {
        id: ID!
        make: String!
        model: String!
        owner: User!
    }
        
    extend type Mutation {
        makeCar(id: Int!, make: String!, model: String!, ownedBy: Int): Car!
        removeCar(id: Int!): Boolean
    }
`;