import express from 'express';
import TrucksService from '../../services/trucks_service';

class TrucksController {
    
    async listTrucks(req: express.Request, res: express.Response) {
        const trucks = await TrucksService.list();
        res.status(200).send(trucks);
    }

    async getTruckById(req: express.Request, res: express.Response) {
        const truck = await TrucksService.readById(req.params.truckId);
        res.status(200).send(truck);
    }

    async createTruck(req: express.Request, res: express.Response) {
        const truckId = await TrucksService.create(req.body);
        res.status(201).send({id: truckId});
    }

    async createParcel(req: express.Request, res: express.Response) {
        const parcelId = await TrucksService.createParcel(req.params.truckId, req.body);
        res.status(201).send({id: parcelId});
    }

    async removeParcel(req: express.Request, res: express.Response) {
        await TrucksService.removeParcel(req.params.truckId, req.params.parcelId);
        res.status(204).send();
    }
}

export default new TrucksController();