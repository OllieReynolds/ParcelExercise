import express from 'express';
import * as http from 'http';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors'
import config from './config';
import { CommonRoutesConfig } from './api/common/common_routes';
import { TrucksRoutes } from './api/routes/trucks_routes';
import debug from 'debug';

const routes: Array<CommonRoutesConfig> = [];

const app = express();
const server: http.Server = http.createServer(app);
const debugLog: debug.IDebugger = debug('app');

app.use(express.json());
app.use(cors());

app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));

routes.push(new TrucksRoutes(app));

app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(`Server running at http://localhost:${config.port}`)
});
server.listen(config.port, () => {
    debugLog(`Server running at http://localhost:${config.port}`);
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
});
