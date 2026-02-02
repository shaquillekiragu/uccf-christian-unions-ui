import type Region from "./region"

export default interface Institution {
    id: number;
    name: string;
    postcode: string;
    geocode: string;
    region: Region;
}