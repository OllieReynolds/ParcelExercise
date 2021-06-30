import { Parcel } from "./parcel";

export interface Truck {
    id: string;
    name: string;
    weight: number;
    parcels: Array<Parcel>;
    total_weight: number;
}