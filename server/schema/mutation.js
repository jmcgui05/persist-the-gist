const graphql = require("graphql");
const { connection } = require('../db');
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean } = graphql;
const { FavoriteType } = require("./types");

const FavoriteMutation = new GraphQLObjectType({
  name: "RootMutationType",
  type: "Mutation",
  fields: {
    addFavorite: {
      type: FavoriteType,
      args: {
        url: { type: GraphQLString },
        forks_url: { type: GraphQLString },
        commits_url: { type: GraphQLString },
        gist_id: { type: GraphQLString },
        files: { type: GraphQLString },
        node_id: { type: GraphQLString },
        git_pull_url: { type: GraphQLString },
        git_push_url: { type: GraphQLString },
        html_url: { type: GraphQLString },
        public: { type: GraphQLBoolean },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
        description: { type: GraphQLString },
        comments: { type: GraphQLInt },
        comments_url: { type: GraphQLString },
        owner: { type: GraphQLString },
        history: { type: GraphQLString },
        truncated: { type: GraphQLBoolean }
      },
      resolve(parentVal, args) {
        const query = "INSERT INTO favorites (url, forks_url, commits_url, gist_id, node_id, git_pull_url,"
          + "git_push_url, html_url, public, created_at, updated_at, description,"
          + "comments, comments_url, owner, history, truncated)"
          + "VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17);";
        const values = [
          args.url, args.forks_url, args.commits_url, args.gist_id, args.node_id, args.git_pull_url, args.git_push_url,
          args.html_url, args.public, args.created_at, args.updated_at, args.description, args.comments, args.comments_url,
          args.owner, args.history, args.truncated
        ];

        return connection
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    deleteFavorite: {
      type: FavoriteType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve(parentVal, args) {
        const query = "DELETE from favorites where id=$1";
        const values = [args.id];

        return connection
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    }
  }
});

exports.mutation = FavoriteMutation;