const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLInt } = graphql;

const FavoriteType = new GraphQLObjectType({
  name: "Favorite",
  type: "Query",
  fields: {
    id: { type: GraphQLString },
    url: { type: GraphQLString },
    forks_url: { type: GraphQLString },
    commits_url: { type: GraphQLString },
    gist_id: { type: GraphQLString },
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
  }
});

exports.FavoriteType = FavoriteType;