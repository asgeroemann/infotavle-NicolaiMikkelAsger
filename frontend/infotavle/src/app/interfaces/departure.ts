import { JourneyDetailRef } from "../journey-detail-ref";
import { Notes } from "../notes";
import { Product } from "../product";


export interface Departure {
    JourneyDetailRef: JourneyDetailRef;
    JourneyStatus:    string;
    ProductAtStop:    Product;
    Product:          Product[];
    Notes:            Notes;
    name:             string;
    type:             string;
    stop:             string;
    stopid:           string;
    stopExtId:        string;
    lon:              number;
    lat:              number;
    prognosisType?:   string;
    time:             string;
    date:             Date;
    rtTime?:          string;
    rtDate?:          Date;
    reachable:        boolean;
    direction:        string;
    directionFlag:    string;
}