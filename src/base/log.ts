import fs from 'fs';
import path from 'path';
import winston from 'winston';

const format = winston.format;
const { timestamp, prettyPrint } = format;

const folderName = path.join(__dirname, '../../logs');
if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName, { recursive: true });
}
const filename = new Date().getDate() + '_' + (new Date().getMonth() + 1) + '_' + new Date().getFullYear() + '.log';

const log = fs.createWriteStream(path.join(folderName, filename));

export const logsConfig = {
  stream: log,
  maxBodyLength: 10000,
  logReqHeaderList: ['Authorization'],
  logReqUserAgent: false,
  logRequestId: true,
  noColors: true,
};

export const notifyLogChannel = winston.createLogger({
  level: 'info',
  format: format.combine(format.splat(), format.simple(), timestamp(), prettyPrint()),
  transports: [new winston.transports.File({ filename: folderName + '/notification.log' })],
});
