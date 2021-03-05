// const { connection } = require('./db');
// const { GraphQLObjectType, GraphQLID , GraphQLList, GraphQLString} = require("graphql");
// const { FavoriteType } = require('./schema/typesSchema');
// const gistLibrary = require('./gistLibrary/theGister');

// const favorite = {
//   type: new GraphQLList(FavoriteType),
//   args: { id: { type: GraphQLID } },
//   resolve() {
//     const query = "SELECT * from favorites;";
//     return connection
//       .any(query)
//       .then(res => res)
//       .catch(err => err);
//   }
// };

// const gistsByUser = {
//   type: new GraphQLList(FavoriteType),
//   args: { username: { type: GraphQLString } },
//   async resolve(parentVal, args) {
//     return await gistLibrary.getGistsByUser(args.username);
//   }
// };

// const gistById = {
//   type: FavoriteType,
//   args: { id: { type: GraphQLString } },
//   async resolve(parentVal, args) {
//     return await gistLibrary.getGistById(args.id);
//   }
// }

// module.exports = {
//   favorite,
//   gistsByUser,
//   gistById
// }