const express = require('express');
const app = express();
const { ApolloServer, gql } = require('apollo-server-express');
const models = require('./models');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const me = models.users[0];


async function startServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: {
            models,
            me
        }
    });

    await server.start();
    server.applyMiddleware({app})

}

startServer();
app.listen(3000, ()=>console.info('Apollo GraphQL running port 3000'));
