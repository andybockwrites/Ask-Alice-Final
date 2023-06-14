const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        carrots: [Carrot]
    }

    type Carrot {
        _id: ID
        drugName: String
        parentCompany: String
        carrots: [User]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        me: User
        carrots(username: String): [Carrot]
        carrotsByDrugName(drugName: String!): Carrot
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addCarrot(drugName: String!, parentCompany: String!): Carrot
        removeCarrot(carrotId: ID!): Carrot
        removeUser(userId: ID!): User
    }
`;

module.exports = typeDefs;