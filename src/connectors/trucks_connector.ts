import shortid from 'shortid';
import { Truck } from '../models/truck';
import { Parcel } from '../models/parcel';
import debug from 'debug';

const log: debug.IDebugger = debug('app:truck-connector');

/**
 * This is where we'd normally connect to a DB,
 * but for this exercise, we'll use an in-memory array
 */
class TrucksConnector
{
    trucks: Array<Truck> = [];

    constructor() {
        log("Establish backend connection");
    }

    async addTruck(truck: Truck) {
        truck.id = shortid.generate();
        truck.total_weight = truck.weight;
        truck.parcels = [];
        this.trucks.push(truck);
        return truck.id;
    }

    async addParcel(truckId: string, parcel: Parcel) {
        parcel.id = shortid.generate();

        const truckIndex = this.trucks.findIndex(
            (truck: { id: string}) => truck.id === truckId
        );

        let currentTruck = this.trucks[truckIndex];

        currentTruck.parcels.push(parcel);
        currentTruck.total_weight += parcel.weight;

        this.trucks.splice(truckIndex, 1, currentTruck);
        return parcel.id;
    }

    async removeParcel(truckId: string, parcelId: string) {
        const truckIndex = this.trucks.findIndex(
            (truck: { id: string}) => truck.id === truckId
        );

        let currentTruck = this.trucks[truckIndex];

        const parcelIndex = currentTruck.parcels.findIndex(
            (parcel: {id: string}) => parcel.id === parcelId
        );

        let currentParcel = currentTruck.parcels[parcelIndex];

        currentTruck.total_weight -= currentParcel.weight;

        currentTruck.parcels.splice(parcelIndex, 1);
        this.trucks.splice(truckIndex, 1, currentTruck);
        return currentParcel.id;
    }

    async getTrucks() {
        return this.trucks;
    }

    async getTrucksById(truckId: string) {
        return this.trucks.find((truck: { id: string}) => truck.id === truckId);
    }

    async getParcelsById(truckId: string, parcelId: string) {
        const truckIndex = this.trucks.findIndex(
            (truck: { id: string}) => truck.id === truckId
        );

        let currentTruck = this.trucks[truckIndex];

        return currentTruck.parcels.find((parcel: { id: string}) => parcel.id === parcelId);
    }
}

export default new TrucksConnector();