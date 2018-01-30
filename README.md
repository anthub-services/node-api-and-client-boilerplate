# Node Client and API Boilerplate
Required node version is `9.2.1`. The [API](https://github.com/rickyhurtado/node-client-and-api-boilerplate/tree/master/api) app is developed with [Express](https://expressjs.com/) and the [client](https://github.com/rickyhurtado/node-client-and-api-boilerplate/tree/master/client) app is bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Running the Apps

### Starting the apps in local:

**Express API**

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

**React App**

Open a terminal console and change directory from `root` to `client`. Copy `.env.dist` to `.env` and change the values of the environment variables if needed.

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

To generate the `./client/src/Assets/Styles/Style.css`, open another terminal window and change `root` directory to `client` then run the following script:

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

Note that the `docker-compose build` script is executed only once if the Docker image has not been created yet.

To shutdown the apps, press `CTRL+C` and run the following script in the terminal:

```
docker-compose down
```

The `yarn run watch-css` script should be running on a separate terminal window for client app.
