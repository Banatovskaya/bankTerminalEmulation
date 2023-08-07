import { ClientData, AccessWithData } from '../interfaces/interfaces';
import { request } from "./http";
import { getHash } from "./getHash";
export async function checkPin(cardNumber : string, pin : string) : Promise<AccessWithData> {

    let data:ClientData = await request(cardNumber)
     
    // this whole component is a crutch replacement of web-sokets and server part
    // access must be transferred separately from data from the server
    let access: boolean;
    if (getHash(pin) === data.hash){
         access = true;
    } else {
        access = false;
        data = {
            id: '',
            hash: '',
            name: '',
            cashBalance: 0
        }
    }
    return {access, data};
}