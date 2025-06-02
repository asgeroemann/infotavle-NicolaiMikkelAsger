export interface Note {
    value:         string;
    key:           string;
    type:          string;
    routeIdxFrom?: number;
    routeIdxTo?:   number;
    txtN:          string;
}