import { ClientData } from "../interfaces/interfaces";

export let clientData: ClientData;

export function setClientData(data:ClientData) : void{
    clientData = data;
    console.log('data',clientData)
};