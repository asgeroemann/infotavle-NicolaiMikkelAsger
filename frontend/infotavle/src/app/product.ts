import { Icon } from "./icon";
import { OperatorInfo } from "./operator-info";

export interface Product {
    icon:          Icon;
    operatorInfo:  OperatorInfo;
    name:          string;
    internalName:  string;
    displayNumber: string;
    num:           string;
    line:          string;
    lineId:        string;
    catOut:        string;
    catIn:         string;
    catCode:       string;
    cls:           string;
    catOutS:       string;
    catOutL:       string;
    operatorCode:  string;
    operator:      string;
    admin:         string;
    routeIdxFrom?: number;
    routeIdxTo?:   number;
    matchId:       string;
}