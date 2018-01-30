# Express API Boilerplate
Required node version is `9.2.1`. The API app is developed with [Express](https://expressjs.com/).

## Running the App

### Starting the app in local:

Open a terminal console and change directory from `root` to `api`. Copy `.env.dist` to `.env` and change the values of the environment variables if needed.

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

Note that the `docker-compose build` script is executed only once if the Docker image has not been created yet.

To shutdown the applications, press `CTRL+C` and run the following script in the terminal:

```
docker-compose down
```
