# Express API Boilerplate
Required node version is `9.2.1`. The API app is powered by [Express](https://expressjs.com/) and [PostgreSQL](https://www.postgresql.org/) database.

## Running the App

### Starting the app in local:

Open a terminal console and change the project directory from `root` to `api`. Copy `.env.dist` to `.env` and change the values of the environment variables if needed.

```
PORT=7770
ALLOW_ORIGIN=http://localhost:7771
JWT_SECRET=jwtsecretcode
POSTGRES_PORT=5432
POSTGRES_DB=express_api_dev
POSTGRES_USER=express_api_user
POSTGRES_PASSWORD=root
```

Note: Only change the environment variables for `POSTGRES_USER` and `POSTGRES_PASSWORD` if working on local machine.

Then run the following scripts in the terminal:

```
yarn
yarn start
```

Access the client app at <http://localhost:7770>.

### Starting the App in Docker:

Download and install the [Docker Community Edition](https://www.docker.com/community-edition). With [Docker](https://www.docker.com/), both the API and client apps can be started using one script. First, do the same instructions above except for the `yarn`, `yarn start`, and `yarn global add detect-port` scripts. Then change directory to `root`, and run the following scripts in the terminal:

```
docker-compose build
docker-compose up
```

Note: The `docker-compose build` script is executed only once if the Docker image has not been created yet.

To shutdown the app, press `CTRL+C` and run the following script in the terminal:

```
docker-compose down
```

## Bash Commands

Change the project directory from `root` to `api` then run the following commands:

### Docker

| Command                                | Description                                  |
|----------------------------------------|----------------------------------------------|
| `./bin/start`                          | Build and run the api and database services  |
| `./bin/stop`                           | Stop all the services                        |
| `./bin/console <container ID or Name>` | Access the terminal console of API container |

Note: To view the Docker containers, open another terminal then enter `docker ps`. To manage separate Docker instance for API, open another terminal window and change the project directory from `root` to `api` and run the commands above.

### Database

**Local:**

| Command                               | Description                                                |
|---------------------------------------|------------------------------------------------------------|
| `./bin/pg/local/start`                | Start the PostgreSQL server (for Mac users only)           |
| `./bin/pg/local/initdb`               | Initialise database with schema migration and data seeding |
| `./bin/pg/local/resetdb`              | Drop and re-initialise database                            |
| `./bin/pg/local/dropdb`               | Drop database                                              |
| `./bin/pg/local/migrate`              | Run new schema migration                                   |
| `./bin/pg/local/seed <seed file>`     | Run specific data seed file with or without .js extension  |
| `./bin/pg/local/seedundo <seed file>` | Revert the seed of specific data seed file                 |
| `./bin/pg/local/psql`                 | Access the database console                                |

**Docker**

- To run the commands for Docker database service, simply remove the `local` from the command
- The `start` command works only in local machine
- Used `./bin/pg/psql <database container ID or Name>` to access the database console

## Users

Use the following credentials to test different API responses. Default password for all accounts is `password`. Open [./api_client/src/controllers/Session.js](https://github.com/rickyhurtado/node-client-and-api-boilerplate/blob/master/api/src/controllers/Sessions.js) for reference.

- **Admin User:** `admin@email.com` - can access all applications
- **Admin User witout Settings page:** `admin_no_settings@email.com` - no access on admin Settings page
- **User redirected to internal page:** `referrer@email.com` – when `redirect.url` is set without the domain, user shall be redirected to internal page if no location path (referrer) found on the Sign In page
- **User redirected to external page:** `redirect@email.com` – when `redirect.external` and `redirect.url` are set, user shall be redirected to external page if no location path (referrer) found on the Sign In page
- **Blocked User:** `blocked@email.com` – user is signed in but the account is blocked
- **Unauthorized User:** simply enter wrong `email` and/or `password`
