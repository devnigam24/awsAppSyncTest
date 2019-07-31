import * as express  from 'express';
import * as bodyParser  from 'body-parser';
import * as http from 'http';

import { getUser } from './src/client';

const application = express();

application.use(express.static('public'));
application.use(bodyParser.json());
application.use(bodyParser.urlencoded({ extended: true }));

application.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

application.get('/getUser', async (request, response) => {
  response.send(await getUser(request.query.userId));
});

application.post('/getUser', async (request, response) => {
  response.send(await getUser(request.body.id));
});

http.createServer(application).listen(8080, () => {
  console.log('server running on port 8080....');
});