import { Departure } from "./departure";
import { TechnicalMessages } from "./technical-message";

export interface Departures {
    Departure:         Departure[];
    TechnicalMessages: TechnicalMessages;
    serverVersion:     string;
    dialectVersion:    string;
    planRtTs:          Date;
    requestId:         string;
}
