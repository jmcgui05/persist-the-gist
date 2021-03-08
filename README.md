# persist-the-gist

### Description

This application consists of a REST API that exposes endpoints for retrieving gists by user, a sepcifc gist by Id and
to post/delete gists to a favorite table in Postgres.

### Status

* API is complete
* Library is complete
* Database/ORM complete
* Frontend incomplete

### Instructions to run locally

1. Make sure you have postgres install locally and running.
2. Navigate to server directory and run `npm install`
3. Run `node index.js`
4. You should see some log from Sequelize that a Database has been created for you, based on the schema:
`Executing (default): CREATE TABLE IF NOT EXISTS "gists"`

### Instruction to test via PostMan (frontend incomplete)

1. Curl the Github Gist API to get a specific Gist that we can use as a favorite, example: 
```
  curl \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/gists/6cbb59919d4730781d19a6cbf2fa3611 | jq .
```
2. In postman, verify we have no favorite gists in our db yet with GET: `localhost:4000/gists/favorites`
3. To add a favorite gist to our db, USE POST with the following info:
   * endpoint: `localhost:4000/gists/favorites`
   * x-www-form-urlencoded values from the above (or any gist):
   ```
    id, description, created_at, files
   ```
4. Retry the GET request to verify the value comes back as expected
5. Remove the gist from our favorites by hitting the DELETE endpoint like:
`localhost:4000/gists/favorites/<ID>`