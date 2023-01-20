import { addBigMessageComponent } from "../components/bigMessage/bigMessage";
import startPage from "../pages/startPage/startPage";
import { getHTMLElement } from "./getElement";

export function request(id: string, 
    url: string = `http://localhost:3001/clients/${id}`,
    method: string = 'GET',
    body: null | string = null,
    headers = {'Content-Type': 'application/json'})  {

        const container = getHTMLElement('.container');
        let response = fetch(url, {method, body, headers})
        .then((res) => {
            if (res.status === 201 || res.status === 200){		
                return res.json()
            } else {   
                throw new Error(`Could not loading, status: ${res.status}`);
            }
        })
        .catch((err) => {
        addBigMessageComponent(container, "помилка серверу", startPage );
        throw err;
    });
    return response
}