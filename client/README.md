# React App
Required node version is `9.2.1`. The client app is bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and [Bootstrap 3.3](http://getbootstrap.com/docs/3.3/) framework and theme.

## Starting the Client App

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

Access the app at <http://localhost:7771>.

## Docker

Download and install the [Docker Community Edition](https://www.docker.com/community-edition).

Note: See **Bash Commands** section for Docker.

The `yarn run watch-css` command should be running on a separate terminal console for client app.

## Bash Commands

From the `root` directory of the project, run the following commands:

Note: To view the Docker containers, open another terminal then enter `docker ps`. To manage separate Docker instance for client, open another terminal console and change the project directory from `root` to `client` and run the commands below.

### Docker

| Command                                | Description                                     |
|----------------------------------------|-------------------------------------------------|
| `./bin/install`                        | Build the Docker container                      |
| `./bin/start`                          | Build and run the client                        |
| `./bin/stop`                           | Stop the service                                |
| `./bin/console <container ID or Name>` | Access the terminal console of client container |

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
