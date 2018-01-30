import JWT from 'jsonwebtoken';

export default {
  authenticate(req, res) {
    let status = 200;
    let data = {};

    if (req.body.password === 'password') {
      let apps;

      switch (req.body.email) {
        case 'admin@email.com':
          break;
        case 'referrer@email.com':
          data['redirect'] = { url: '/referrer' }
          break;
        case 'redirect@email.com':
          // Custom redirect for users if no referrer found in the log in page
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
        const token = JWT.sign({ user: { id: 1 } }, process.env.JWT_SECRET, { expiresIn: 86400 });
        data = { token, data };
      }
    } else {
      status = 401;
      data = { message: "The email or password you entered doesn't match any account." }
    }

    res.status(status).send(data);
  },

  clearSession(req, res) {
    res.status(200).send();
  },

  verifyToken(req, res) {
    res.status(200).send();

    // User logged out already or token is expired
    // res.status(401).send();
  }
};
