# Node API and Client Boilerplate
Required node version is `9.2.1`. The [API](https://github.com/rickyhurtado/node-client-and-api-boilerplate/tree/master/api) app is powered by [Express](https://expressjs.com/) and [PostgreSQL](https://www.postgresql.org/) database and the [client](https://github.com/rickyhurtado/node-client-and-api-boilerplate/tree/master/client) app is bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and [Bootstrap 3.3](http://getbootstrap.com/docs/3.3/) framework and theme.

## Running the Apps

### Cloning the project:

Open a terminal console and run the following scripts:

```
git clone git@github.com:rickyhurtado/node-client-and-api-boilerplate.git
cd node-client-and-api-boilerplate
```

### Starting the apps in local:

**Express API**

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

**React App**

Open a terminal console and change the project directory from `root` to `client`. Copy `.env.dist` to `.env` and change the values of the environment variables if needed.

```
REACT_APP_API_BASE_URL=http://localhost:7770
REACT_APP_API_SIGN_IN_URL=http://localhost:7770/sign-in
REACT_APP_API_SIGN_OUT_URL=http://localhost:7770/sign-out
REACT_APP_API_VERIFY_TOKEN_URL=http://localhost:7770/verify-token
REACT_APP_API_JWT_SECRET=jwtsecretcode
```

Then run the following scripts in the terminal:

```
yarn
yarn start
```

To generate the `./client/src/Assets/Styles/Style.css`, open another terminal window and change the project directory from `root` to `client` then run the following script:

```
yarn run watch-css
```

The script above works only in Mac with the `fsevents` module installed. Run the script below as an alternative:

```
yarn run build-css
```

Note: You must run the script above manually everytime you made changes to `.scss` files.  All the `*.scss` files shall be compiled to `*.css` but only the `Style.css` is included in the repository.

Access the API app at <http://localhost:7771>.

### Starting the React App and Express API in Docker:

Download and install the [Docker Community Edition](https://www.docker.com/community-edition). With [Docker](https://www.docker.com/), both the API and client apps can be started using one script. First, do the same instructions above except for the `yarn`, `yarn start`, and `yarn global add detect-port` scripts. Then change directory to `root`, and run the following scripts in the terminal:

```
docker-compose build
docker-compose up
```

Note: The `docker-compose build` script is executed only once if the Docker image has not been created yet.

To shutdown the apps, press `CTRL+C` and run the following script in the terminal:

```
docker-compose down
```

The `yarn run watch-css` script should be running on a separate terminal window for client app.

## Database using PostgreSQL and Sequelize

### Local

**Installing PostgreSQL**

**Mac:** [Getting Started with PostgreSQL on Mac OSX](https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb)
<br>
**Windows:** [Installing PostgreSQL, Creating a User, and Creating a Database](https://confluence.atlassian.com/display/CONF30/Database+Setup+for+PostgreSQL+on+Windows)

NOTE: For Mac users, you can run the PostgreSQL server on a separate terminal console by running the following script:

```
postgres -D /usr/local/var/postgres
```

**Database Create and Drop Commands**

Open a terminal console and change the project directory from `root` to `api` and run the following script:

```
sequelize db:create
```

To drop database, run the following script:

```
sequelize db:drop
```

### Docker

See **Bash Commands** below.

## Bash Commands

From the `root` directory of the project, run the following commands:

### Docker

| Command                                | Description                                                |
|----------------------------------------|------------------------------------------------------------|
| `./bin/start`                          | Build and run all the services (API, client, and database) |
| `./bin/stop`                           | Stop all the services                                      |
| `./bin/console <container ID or Name>` | Access the terminal console of API or client container     |

Note: To view the Docker containers, open another terminal then enter `docker ps`. To manage separate Docker instance for API or client, open another terminal window and change the project directory from `root` to `api` or `client` and run the commands above.

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

Note: To run the commands above for separate API Docker instance, simply change the project directory from `root` to `api`. Same applies for local.

### CSS

| Command           | Description                                                         |
|-------------------|---------------------------------------------------------------------|
| `./bin/css/watch` | Watch and compile *.scss files on file changes (for Mac users only) |
| `./bin/css/build` | Manually compile *.scss files                                       |

Note: To run the commands above for separate client Docker instance, simply change the project directory from `root` to `client`. Same applies for local.

## Users

With the [API](https://github.com/rickyhurtado/node-client-and-api-boilerplate/tree/master/api) app, use the following credentials to test different API responses. Default password for all accounts is `password`.

- **Admin User:** `admin@email.com` - can access all applications
- **Admin User witout Settings page:** `admin_no_settings@email.com` - no access on admin Settings page
- **User redirected to internal page:** `referrer@email.com` – when `redirect.url` is set without the domain, user shall be redirected to internal page if no location path (referrer) found on the Sign In page
- **User redirected to external page:** `redirect@email.com` – when `redirect.external` and `redirect.url` are set, user shall be redirected to external page if no location path (referrer) found on the Sign In page
- **Blocked User:** `blocked@email.com` – user is signed in but the account is blocked
- **Unauthorized User:** simply enter wrong `email` and/or `password`
