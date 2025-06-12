import { City } from "./city";
import { Forecast } from "./forecast";

export interface Forecasts {
    cod: string;
    message: number;
    cnt: number;
    list: Forecast[];
    city: City;
}
