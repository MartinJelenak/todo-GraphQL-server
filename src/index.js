const express = require('express');
const { graphqlHTTP } = require('express-graphql');
// const { buildSchema } = require('graphql');
const cors = require('cors');
const { setupDB } = require('./config/databaseConnection')
const schema = require('./graphql/schema');

const app = express();
setupDB(v => console.log(v));

app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  pretty: true
}));

app.listen(4000);
console.log("\x1b[32m", 'SERVER OK, http://localhost:4000/graphql');