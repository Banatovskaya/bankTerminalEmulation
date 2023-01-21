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
import { getClientData } from '../../services/data';
import { addPinCode } from '../../components/pinCode/pinCode';
import menuPage from '../menuPage/menuPage';


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
    const cash: ClientData = getClientData();
    container.append(page);  
   
    //footer
    const footer = addFooter(container);
    addBackButton(footer, menuPage, 'назад');
    addTimer(footer, FormatOfDate['HH:MM']);

    async function getPinCode(){
        const pinCode = await addPinCode(page);
        console.log(pinCode)
    }
    getPinCode(); 

}

export default changePinCodePage