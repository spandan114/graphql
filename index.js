const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require("mongoose");
const {mongoURI} = require('./key')
const cors = require('cors')

const app = express();

app.use(express.json());

app.use(cors())

app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
    }),
  );

mongoose
  .connect(mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("💻 Mondodb Connected"))
  .catch(err => console.error(err));


const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port port 🔥`);