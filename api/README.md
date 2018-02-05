# Express API Boilerplate
Required node version is `9.2.1`. The API app is developed with [Express](https://expressjs.com/).

## Running the App

### Starting the app in local:

Open a terminal console and change the project directory from `root` to `api`. Copy `.env.dist` to `.env` and change the values of the environment variables if needed.

```
PORT=7770
ALLOW_ORIGIN=http://localhost:7771
JWT_SECRET=jwtsecretcode
```

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

Change the project directory from `root` to `api` then run the following script to start API app in Docker:

```
./bin/start
```

And to stop the API app:

```
./bin/stop
```

Note: The script above should be done on a separate terminal window to shutdown Docker apps properly.

## Users

Use the following credentials to test different API responses. Default password for all accounts is `password`. Open [./api_client/src/controllers/Session.js](https://github.com/rickyhurtado/node-client-and-api-boilerplate/blob/master/api/src/controllers/Sessions.js) for reference.

- **Admin User:** `admin@email.com` - can access all applications
- **Admin User witout Settings page:** `admin_no_settings@email.com` - no access on admin Settings page
- **User redirected to internal page:** `referrer@email.com` – when `redirect.url` is set without the domain, user shall be redirected to internal page if no location path (referrer) found on the Sign In page
- **User redirected to external page:** `redirect@email.com` – when `redirect.external` and `redirect.url` are set, user shall be redirected to external page if no location path (referrer) found on the Sign In page
- **Blocked User:** `blocked@email.com` – user is signed in but the account is blocked
- **Unauthorized User:** simply enter wrong `email` and/or `password`
