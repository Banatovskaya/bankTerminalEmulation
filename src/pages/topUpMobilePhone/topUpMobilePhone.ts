import './topUpMobilePhone.scss';
import { Pages } from "../../interfaces/interfaces";
// import bankingServicesPage from '../bankingServisesPage/bankingServicesPage';
import menuPage from '../menuPage/menuPage';
import { getHTMLElement } from "../../services/getElement";
import { addHeader } from '../../components/header/header';
import { addCancelButton } from '../../components/buttons/cancelButton/cancelButton';
import { addFooter } from '../../components/footer/footes';
import { addTimer, FormatOfDate} from '../../components/timers/timers';
import { addCommonButton } from "../../components/buttons/commonButton/commonButton";
import { addheaderName } from '../../components/headerName/headerName';
import { addBackButton } from '../../components/buttons/backButton/backButton';
import img from '../../assets/images/phone.png';

function topUpMobilePhone(): void {
    const container = getHTMLElement('.container');
    container.innerHTML = '';

    //header 
    const header = addHeader(container); 
    addheaderName(header, img, "Поповнення телефону");
    addCancelButton(header);

     // middle -> Page
    const page: HTMLElement = document.createElement('div');
    page.classList.add('page');
    page.id = Pages.TopUpMobilePhone;
    page.classList.add(Pages.TopUpMobilePhone);
    const title: HTMLElement = document.createElement('H1');
    page.classList.add('title');
    title.innerHTML = `логіка та структура компонента ще не прописана`;
    page.append(title);
    container.append(page);  

     //footer
    const footer = addFooter(container);
    addBackButton(footer, menuPage, 'назад');
    addTimer(footer, FormatOfDate['DD month YYYY']);
    addTimer(footer, FormatOfDate['HH:MM']);
}

export default topUpMobilePhone