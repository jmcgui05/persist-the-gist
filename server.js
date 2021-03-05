require('dotenv').config();
const express = require('express');
const graphql = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema } = graphql;
const { query } = require('./schema/query');
const { mutation } = require('./schema/mutation');
const { PORT } = process.env;

const schema = new GraphQLSchema({ 
  query,
  mutation 
});
    
let app = express();

app.use('/api', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(PORT, () =>
  console.log(`GraphQL server running on localhost:${PORT}`)
);