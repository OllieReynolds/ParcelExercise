import { Truck } from "../models/truck";
import { Parcel } from "../models/parcel";
import TrucksConnector from "../connectors/trucks_connector"

class TrucksService
{
    async create(resource: Truck) {
        return TrucksConnector.addTruck(resource);
    }

    async createParcel(truckId: string, resource: Parcel) {
        return TrucksConnector.addParcel(truckId, resource);
    }

    async removeParcel(truckId: string, parcelId: string) {
        return TrucksConnector.removeParcel(truckId, parcelId);
    }

    async list() {
        return TrucksConnector.getTrucks();
    }

    async readById(id: string) {
        return TrucksConnector.getTrucksById(id);
    }

    async readParcelById(truckId: string, parcelId: string) {
        return TrucksConnector.getParcelsById(truckId, parcelId);
    }
}

export default new TrucksService();