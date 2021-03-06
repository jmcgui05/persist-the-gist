const { connection } = require('../db');
const { GraphQLObjectType, GraphQLID , GraphQLList, GraphQLString} = require("graphql");
const { FavoriteType } = require('./types');
const gister = require('../gistLibrary/theGister');

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  type: "Query",
  fields: {
    favorite: {
      type: new GraphQLList(FavoriteType),
      args: { id: { type: GraphQLID } },
      resolve() {
        const query = "SELECT * from favorites;";
        return connection
          .any(query)
          .then(res => res)
          .catch(err => err);
      }
    },
    gistsByUser: {
      type: new GraphQLList(FavoriteType),
      args: { username: { type: GraphQLString } },
      async resolve(parentVal, args) {
        return await gister.getGistsByUser(args.username);
      }
    },
    gistById: {
      type: FavoriteType,
      args: { id: { type: GraphQLString } },
      async resolve(parentVal, args) {
        return await gister.getGistById(args.id);
      }
    }
  }
});

exports.query = RootQuery;