import { addErrorPinComponent } from "../components/errorPinComponent/errorPinComponent";
import { getHTMLElement } from "./getElement";
import startPage from "../pages/startPage/startPage";

export async function checkPin(cardNumber : string, pin : string) : Promise<boolean> {

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
       
    if (getHash(pin) === data.hash){
        return data
    } else {
        return false
    }
}