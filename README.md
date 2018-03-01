# Node API and Client Boilerplate
Required node version is `9.2.1`. The [API](https://github.com/rickyhurtado/node-client-and-api-boilerplate/tree/master/api) app is powered by [Express](https://expressjs.com/) and [PostgreSQL](https://www.postgresql.org/) database and the [client](https://github.com/rickyhurtado/node-client-and-api-boilerplate/tree/master/client) app is bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and [Bootstrap 3.3](http://getbootstrap.com/docs/3.3/) framework and theme.

## Starting the Apps

### Express API

Note: Only change the environment variables for `POSTGRES_USER` and `POSTGRES_PASSWORD` if working on local machine.

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

Then run the following commands:

```
yarn
yarn start
```

Note: The database must be created and initialized after starting the app on fresh installation. See **Database using PostgreSQL and Sequelize** section. See **Bash Commands** section for Docker.

Access the app at <http://localhost:7770>.

### React App

Open a terminal console and change the project directory from `root` to `client`. Copy `.env.dist` to `.env` and change the values of the environment variables if needed.

```
REACT_APP_SITE_NAME=React App Boilerplate
REACT_APP_API_BASE_URL=http://localhost:7770
REACT_APP_API_SIGN_IN_URL=http://localhost:7770/sign-in
REACT_APP_API_SIGN_OUT_URL=http://localhost:7770/sign-out
REACT_APP_API_VERIFY_TOKEN_URL=http://localhost:7770/verify-token
REACT_APP_API_JWT_SECRET=jwtsecretcode
```

Then run the following commands:

```
yarn
yarn start
```

Note: See **Bash Commands** section for Docker.

To generate the `./client/src/Assets/Styles/Style.css`, open another terminal console and change the project directory from `root` to `client` then run the following command:

```
yarn run watch-css
```

The command above works only in Mac with the `fsevents` module installed. Run the command below as an alternative:

```
yarn run build-css
```

Note: You must run the command above manually everytime you made changes to `.scss` files.  All the `*.scss` files shall be compiled to `*.css` but only the `Style.css` is included in the repository.

Access the client app at <http://localhost:7771>.

## Docker

Download and install the [Docker Community Edition](https://www.docker.com/community-edition). With [Docker](https://www.docker.com/), both the API and client apps can be started using one command.

Note: See **Bash Commands** section for Docker.

The `yarn run watch-css` command should be running on a separate terminal console for client app.

## Database using PostgreSQL and Sequelize

**Installing PostgreSQL**

**Mac:** [Getting Started with PostgreSQL on Mac OSX](https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb)
<br>
**Windows:** [Installing PostgreSQL, Creating a User, and Creating a Database](https://confluence.atlassian.com/display/CONF30/Database+Setup+for+PostgreSQL+on+Windows)

Note: For Mac users, you can run the PostgreSQL server on a separate terminal console by running the following command:

```
postgres -D /usr/local/var/postgres
```

**Create and Initialize Database**

Open a terminal console and change the project directory from `root` to `api` and run the following commands:

```
sequelize db:create
sequelize db:migrate
sequelize db:seed:all
```

To drop database, run the following command:

```
sequelize db:drop
```

See **Bash Commands** section for Docker.

## Bash Commands

From the `root` directory of the project, run the following commands:

Note: To view the Docker containers, open another terminal then enter `docker ps`. To manage separate Docker instance for API or client, open another terminal console and change the project directory from `root` to `api` or `client` and run the commands below.

### Docker

| Command                                | Description                                                |
|----------------------------------------|------------------------------------------------------------|
| `./bin/install`                        | Build the Docker container and initialise database         |
| `./bin/start`                          | Build and run all the services (API, client, and database) |
| `./bin/stop`                           | Stop all the services                                      |
| `./bin/console <container ID or Name>` | Access the terminal console of API or client container     |

Note: To manage separate Docker instance for API or client, open another terminal console and change the project directory from `root` to `api` or `client` and run the commands above.

### Database

**Local**

| Command                               | Description                                                |
|---------------------------------------|------------------------------------------------------------|
| `./bin/pg/local/start`                | Start the PostgreSQL server (for Mac users only)           |
| `./bin/pg/local/resetdb`              | Drop and re-initialise database                            |
| `./bin/pg/local/migrate`              | Run new schema migration                                   |
| `./bin/pg/local/migrateundo`          | Revert the recent schema migration                         |
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

## Other API App Boilerplate

- [Node API Mockup Data Boilerplate](https://github.com/rickyhurtado/node-api-mockup-data-boilerplate) – non-database API server powered by [Express](https://expressjs.com/)

## Users

With the [API](https://github.com/rickyhurtado/node-client-and-api-boilerplate/tree/master/api) or the [Node API Mockup Data Boilerplate](https://github.com/rickyhurtado/node-api-mockup-data-boilerplate/tree/master) app, use the following credentials to test different API responses. Default password for all accounts is `password`.

- **Admin User:** `admin@email.com` - can access all applications
- **Admin User witout Settings page:** `admin_no_settings@email.com` - no access on admin Settings page
- **User redirected to internal page:** `referrer@email.com` – when `redirect.url` is set without the domain, user shall be redirected to internal page if no location path (referrer) found on the Sign In page
- **User redirected to external page:** `redirect@email.com` – when `redirect.external` and `redirect.url` are set, user shall be redirected to external page if no location path (referrer) found on the Sign In page
- **Blocked User:** `blocked@email.com` – user is signed in but the account is blocked
- **Unauthorized User:** simply enter wrong `email` and/or `password`
