const { connection } = require('../db');
const { GraphQLObjectType, GraphQLID , GraphQLList} = require("graphql");
const { FavoriteType } = require('./types');

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  type: "Query",
  fields: {
    favorite: {
      type: new GraphQLList(FavoriteType),
      args: { id: { type: GraphQLID } },
      resolve() {
        // const query = "SELECT * from favorites where id = $1;";
        const query = "SELECT * from favorites;";
        // const values = [args.id];

        return connection
          .any(query)
          .then(res => res)
          .catch(err => err);
      }
    }
  }
});

exports.query = RootQuery;