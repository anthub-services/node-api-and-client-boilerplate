import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

if (!process.env.PORT) {
  require('dotenv').config();
  console.log('[api][node] Loading ENV vars from .env file with dotenv module');
}

if (!process.env.PORT) {
  console.log('[api][port] 7770 set as default');
  console.log('[api][header] Access-Control-Allow-Origin: * set as default');
} else {
  console.log(`[api][port] ${process.env.PORT}`);
  console.log(`[api][header] Access-Control-Allow-Origin: ${process.env.ALLOW_ORIGIN}`);
}

const app = express();
const port = process.env.PORT || 7770;
const allowOrigin = process.env.ALLOW_ORIGIN || '*';

app.listen(port, () => {
  console.log('[api][listen] http://localhost:' + port);
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', allowOrigin);
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
})

app.use(bodyParser.json());

routes(app);
