import path from 'path';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import morganBody from 'morgan-body';

import { connectMongoDb, handleError, inteceptor, logsConfig } from '@base/index';
import { corsOptions } from '@config/cors';
import rootRoute from '@routes/index';
import eventEmmitter from '@services/event-emitters/execute';

const app = express();

config();
connectMongoDb();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(inteceptor);
app.use(cors(corsOptions));
morganBody(app, logsConfig);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', rootRoute);
app.use(handleError);

const HTTP_PORT = process.env.PORT || 8080;
app.listen(HTTP_PORT, () => {
  console.log(`* ### HTTP Server start at port: ${HTTP_PORT} *`);
});

/**
 *  SOCKET SERVER
 */
const SOCKET_PORT = process.env.PORT_SOCKET || 3003;

import http from 'http';
const httpServer = http.createServer();

httpServer.listen(SOCKET_PORT, () => console.log(`* ### Socket Server start at port: ${SOCKET_PORT} *`));

eventEmmitter();
