# persist-the-gist

## Note
***This is the main branch. This branch contains the project using GraphQL. For REST, switch to the rest-api branch***

### Description

This application consists of a GraphQL API that exposes endpoints for retrieving gists by user, a sepcifc gist by Id and
to post/delete gists to a favorite table in Postgres.

### Status

* API is incomplete (files datatype is not correct)
* Library is complete
* Database complete
* Frontend incomplete

### Instructions to run locally

1. Make sure you have postgres install locally and running.
2. Using `psql` or a tool like PgAdmin, run the following command: **note: files datatype is incorrect for now**
    ```
    CREATE TABLE favorites(
        ID serial PRIMARY KEY,
        created_at VARCHAR(255),
        updated_at VARCHAR(255),
        description VARCHAR(255),
        files VARCHAR(255)
    );
    ```
2. Navigate to server directory and run `npm install`
3. Run `node index.js`

### Instruction to test via GraphiQL (frontend incomplete)

1. Curl the Github Gist API to get a specific Gist that we can use as a favorite, example: 
```
  curl \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/gists/6cbb59919d4730781d19a6cbf2fa3611 | jq .
```
2. Navigate to `http://localhost:4000/api` in your browser and verify a get retrieves no data:
```
  {
    favorite{
      description,
      created_at,
      id,
      files
    }
  }
```
3. To add a favorite gist to our db, try this mutation:
```
mutation {
  addFavorite(
    id: "bghjkmn",
    created_at: "2020/01/20",
    description: "graphql test description",
    files: "stringified json obj"
  )
  {html_url, id}
}
```

4. Retry the favorite query to verify the value comes back as expected
5. Remove the gist from our favorites by using the deleteFavorite mutation:
```
mutation {
  deleteFavorite(id: 2){
    id, created_at, description, files
  }
}
```