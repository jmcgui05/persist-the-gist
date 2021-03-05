const { connection } = require('../db');
const { GraphQLObjectType, GraphQLID , GraphQLList, GraphQLString} = require("graphql");
const { FavoriteType } = require('./types');
const { getGistById, getGistsByUser } = require('../gistLibrary/theGister');

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
    },
    gistsByUser: {
      type: new GraphQLList(FavoriteType), // not sure if this type will change
      args: { username: { type: GraphQLString } },
      resolve(parentVal, args) {
        // call library func here with args.username
        // return await theGister.getGistsByUser(args.username);
      }
    },
    gistById: {
      type: new GraphQLList(FavoriteType),
      args: { id: { type: GraphQLString } },
      resolve(parentVal, args) {
        // call library func here with args.id
        // return await theGister.getGistById(args.id);
      }
    }
  }
});

exports.query = RootQuery;