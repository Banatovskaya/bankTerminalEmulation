import { addErrorPinComponent } from "../components/errorPinComponent/errorPinComponent";
import { getHTMLElement } from "./getElement";
import startPage from "../pages/startPage/startPage";
import { ClientData, AccessWithData } from '../interfaces/interfaces';


export async function checkPin(cardNumber : string, pin : string) : Promise<AccessWithData> {

    const container = getHTMLElement('.container');

    function getHash(pin:string) {
       return 'hashOf' + pin;
    } 

    let response = await fetch(`http://localhost:3001/clients/${cardNumber}`, {
        method:'GET', 
        body: null,  
        headers: {'Content-Type': 'application/json'}
    }) 
        .then((res) => {
            if (res.status === 201 || res.status === 200){		
                return res.json()
            } else {   
                throw new Error(`Could not loading, status: ${res.status}`);
            }
        })
        .catch((err) => {
           addErrorPinComponent(container, "помилка серверу", startPage );
           throw err;
    });

    const data =  response;

    // this whole component is a crutch replacement of web-sokets and server part
    // access must be transferred separately from data from the server

    if (getHash(pin) === data.hash){
        const accessWithData = {
            access:true,
            data: data
        }   
        return accessWithData;

    } else {
        const accessWithData = {
            access:true,
            data: {
                id: '',
                hash: '',
                name: '',
                cashBalance: 0
            }
        }   
        accessWithData.access = false
        return accessWithData;
    }
}