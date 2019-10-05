import {} from 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import models, { connectDb } from './models';
import routes from './routes';
import config from "../config/config";
import createData from "../config/data";

const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

// Start DB
const eraseDatabaseOnSync = true;
connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Message.deleteMany({}),
    ]);
    createData();
  }
  app.listen(config.port, () =>
    console.log(`Example app listening on port ${config.port}!`),
  );
});

// Routes
app.use(config.endpoint, routes.user);
app.use('/messages', routes.message);