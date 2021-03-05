const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const graphql = require('graphql');

const fakeDB = {
  'a': {
    id: "123",
    url: "www.test1.com",
    forks_url: "www.forks.com",
    commits_url: "www.commits.com",
    gist_id: "456",
    node_id: "789",
    git_pull_url: "www.pulls.com",
    git_push_url: "www.pushes.com",
    html_url: "www.html.com",
    public: true,
    created_at: "2021/02/01",
    updated_at: "2021/02/01",
    description: "test description",
    comments: 3,
    comments_url: "www.comments.com",
    owner: JSON.stringify({"name": "john"}),
    history: JSON.stringify({"age": "33"}),
    truncated: true
  },
  'b': {
    id: "456",
    url: "www.test2.com",
    forks_url: "www.forks.com",
    commits_url: "www.commits.com",
    gist_id: "789",
    node_id: "123",
    git_pull_url: "www.pulls.com",
    git_push_url: "www.pushes.com",
    html_url: "www.html.com",
    public: true,
    created_at: "2021/02/01",
    updated_at: "2021/02/01",
    description: "test description",
    comments: 3,
    comments_url: "www.comments.com",
    owner: JSON.stringify({"name": "john"}),
    history: JSON.stringify({"age": "33"}),
    truncated: true
  }
};
    
// const QueryRoot = new graphql.GraphQLObjectType({
//   name: 'Query',
//   fields: () => ({
//     hello: {
//       type: graphql.GraphQLString,
//       resolve: () => "Hello you!"
//     }
//   })
// });
const favoriteType = new graphql.GraphQLObjectType({
  name: 'Favorite',
  fields: {
    id: { type: graphql.GraphQLString },
    url: { type: graphql.GraphQLString },
    forks_url: { type: graphql.GraphQLInt },
    commits_url: { type: graphql.GraphQLString },
    gist_id: { type: graphql.GraphQLString },
    node_id: { type: graphql.GraphQLString },
    git_pull_url: { type: graphql.GraphQLString },
    git_push_url: { type: graphql.GraphQLString },
    html_url: { type: graphql.GraphQLString },
    public: { type: graphql.GraphQLBoolean },
    created_at: { type: graphql.GraphQLString },
    updated_at: { type: graphql.GraphQLString },
    description: { type: graphql.GraphQLString },
    comments: { type: graphql.GraphQLInt },
    comments_url: { type: graphql.GraphQLString },
    owner: { type: graphql.GraphQLString },
    history: { type: graphql.GraphQLString },
    truncated: { type: graphql.GraphQLBoolean }
  }
});

const queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: favoriteType,
      args: {
        id: { type: graphql.GraphQLString }
      },
      resolve: (_, {id}) => {
        console.log(_, id)
        return fakeDB[id];
      }
    }
  }
})
    
const schema = new graphql.GraphQLSchema({ 
  query: queryType 
});
    
const app = express();
app.use('/api', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000);