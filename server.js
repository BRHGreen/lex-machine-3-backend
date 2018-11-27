var express = require('express');
var expressGraphQL = require('express-graphql');
var cors = require('cors')
const schema = require('./schema');

var app = express();
app.use('/graphql', cors(), expressGraphQL({
  schema,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');