
import TrucksController from "../controllers/trucks_controller";
import TrucksMiddleware from "../../middleware/trucks_middleware"
import express from 'express';
import { CommonRoutesConfig } from "../common/common_routes";

export class TrucksRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes() {
        this.app.route('/trucks')
            .get(TrucksController.listTrucks)
            .post(TrucksController.createTruck);

        this.app.get(`/trucks/:truckId`, [
            TrucksMiddleware.extractTruckId,
            TrucksMiddleware.validateTruckExists,
            TrucksController.getTruckById]
        );

        this.app.post(`/trucks/:truckId/parcels`, [
            TrucksController.createParcel]
        );

        this.app.delete(`/trucks/:truckId/parcels/:parcelId`, [
            TrucksMiddleware.extractParcelId,
            TrucksMiddleware.validateTruckExists,
            TrucksMiddleware.validateParcelExists,
            TrucksController.removeParcel]
        );

        return this.app;
    }

}