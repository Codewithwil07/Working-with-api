import express from 'express';
const app = express();
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 3000;

import router from './router.js';

app.use(bodyParser.json());
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Running on server ${PORT}`);
});
