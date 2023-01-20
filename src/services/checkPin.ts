import { addBigMessageComponent } from "../components/bigMessage/bigMessage";
import { getHTMLElement } from "./getElement";
import startPage from "../pages/startPage/startPage";
import { ClientData, AccessWithData } from '../interfaces/interfaces';
import { request } from "./http";

export async function checkPin(cardNumber : string, pin : string) : Promise<AccessWithData> {

    function getHash(pin:string) {
       return 'hashOf' + pin;
    } 

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