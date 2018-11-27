import express from 'express';
import expressGraphQL from 'express-graphql';
import cors from 'cors';
import schema from './lib/index';

const app = express();
app.use('/graphql', cors(), expressGraphQL({
  schema,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');