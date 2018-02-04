import JWT from 'jsonwebtoken';

export default {
  authenticate(req, res) {
    const { email, password } = JWT.verify(
      req.body.token,
      process.env.JWT_SECRET,
      function(errors, decoded) {
        if (errors) {
          return res.status(401).send();
        }

        return decoded;
      }
    );

    let status = 200;
    let data = {};

    if (password === 'password') {
      let allowedPaths = ['/admin', '/admin/dashboard'];
      let excludedPaths = [];

      switch (email) {
        case 'admin@email.com':
          allowedPaths = ['*'];
          break;
        case 'admin_no_settings@email.com':
          allowedPaths = ['*'];
          excludedPaths = ['/admin/settings'];
          break;
        case 'user@email.com':
          break;
        case 'referrer@email.com':
          data['redirect'] = { url: '/referrer' }
          break;
        case 'redirect@email.com':
          // Custom redirect for users if no referrer found in the sign in path
          data['redirect'] = {
            external: true,
            url: 'https://fb.com/Ironcoder'
          }
          break;
        case 'blocked@email.com':
          // With custom message
          status = 401;
          data = { message: 'Your account is blocked. Please contact the administrator.' }
          break;
        default:
          status = 401;
          data = { message: "The email or password you entered doesn't match any account." }
      }

      if (status === 200) {
        const token = JWT.sign({
          user: { id: 1 },
          allowedPaths: allowedPaths,
          excludedPaths: excludedPaths },
          process.env.JWT_SECRET, { expiresIn: 86400 }
        );

        data = Object.assign({}, {token}, data);
      }
    } else {
      status = 401;
      data = { message: "The email or password you entered doesn't match any account." };
    }

    res.status(status).send(data);
  },

  clearSession(req, res) {
    res.status(200).send();
  },

  verifyToken(req, res) {
    res.status(200).send();

    // User signed out already or token is expired
    // res.status(401).send();
  }
};
