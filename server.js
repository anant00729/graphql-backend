const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");

console.log("typeof graphqlHTTP :>> ", typeof graphqlHTTP);
const schema = require("./schema");

const app = express();

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 2323;

app.listen(PORT, () => {
  console.log(`the app is running on port number ${PORT}`);
});
