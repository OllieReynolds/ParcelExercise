import express from 'express';
import TrucksService from '../services/trucks_service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:trucks-controller');

class TrucksMiddleware {


    async validateTruckExists(req: express.Request, res: express.Response, next: express.NextFunction) {
        const truck = await TrucksService.readById(req.params.truckId);
        if (truck) {
            next();
        } else {
            res.status(404).send({error: `Truck ${req.params.truckId} not found `})
        }
    }

    async validateParcelExists(req: express.Request, res: express.Response, next: express.NextFunction) {
        const truck = await TrucksService.readParcelById(req.params.truckId, req.params.parcelId);
        if (truck) {
            next();
        } else {
            res.status(404).send({error: `Parcel ${req.params.parcelId} not found `})
        }
    }

    async extractTruckId(req: express.Request, res: express.Response, next: express.NextFunction) {
        req.body.truckId = req.params.truckId;
        next();
    }

    async extractParcelId(req: express.Request, res: express.Response, next: express.NextFunction) {
        req.body.truckId = req.params.truckId;
        req.body.parcelId = req.params.parcelId;
        next();
    }
}

export default new TrucksMiddleware();