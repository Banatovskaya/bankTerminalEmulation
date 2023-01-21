import './changePinCodePage.scss';
import { Pages } from "../../interfaces/interfaces";
import { ClientData } from "../../interfaces/interfaces";
import { addHeader } from '../../components/header/header';
import { addFooter } from '../../components/footer/footes';
import { getHTMLElement } from '../../services/getElement';
import { addheaderName } from '../../components/headerName/headerName';
import { addCancelButton } from '../../components/buttons/cancelButton/cancelButton';
import { addBackButton } from '../../components/buttons/backButton/backButton';
import { addTimer, FormatOfDate } from '../../components/timers/timers';
import { addPinCode } from '../../components/pinCode/pinCode';
import menuPage from '../menuPage/menuPage';
import { addBigMessageComponent } from '../../components/bigMessage/bigMessage';
import { getHash } from '../../services/getHash';
import { clientData, setClientData } from '../../services/data';
import { request } from '../../services/http';

function changePinCodePage(): void {
    const container = getHTMLElement('.container');
    container.innerHTML = '';
    
    //header
    const header = addHeader(container);  
    addheaderName(header, undefined, "Зміна ПІН");
    addCancelButton(header);

    //middle -> Page
    const page: HTMLElement = document.createElement('div');
    page.classList.add('page');
    page.id = Pages.ChangePinCodePage;
    page.classList.add(Pages.ChangePinCodePage);
    const changePin = document.createElement('div');
    changePin.classList.add('changePin');
    page.append(changePin);
    container.append(page);  
   
    //footer
    const footer = addFooter(container);
    addBackButton(footer, menuPage, 'назад');
    addTimer(footer, FormatOfDate['HH:MM']);

    async function getPinCode(){
    
        let firstPIN = await addPinCode(changePin);
        let title = document.createElement('div');
        title.classList.add('changePin__title');
        title.innerHTML=`Продублюйте ПІН`;
        changePin.append(title );
        let secondPin = await addPinCode(changePin);
        
        if(firstPIN == secondPin){
            let data = clientData;
            let newClientData: ClientData;
            newClientData = {...data};
            newClientData.hash = getHash(firstPIN);    
            request(data.id, undefined, 'PUT', JSON.stringify(newClientData))
            .then(()=>{
                setClientData(newClientData)
                addBigMessageComponent(changePin, 'ПИН код змінено', ()=>menuPage());
            })      
        } else {
            addBigMessageComponent(changePin, 'ПИН не співпадає спробуйте ще раз', ()=>changePinCodePage());
        }
    }
    getPinCode(); 

}

export default changePinCodePage