import './bankingServicesPage.scss';
import { Pages } from "../../interfaces/interfaces";
import { getHTMLElement } from "../../services/getElement";
import { ClientData } from "../../interfaces/interfaces";
import { addHeader } from '../../components/header/header';
import { addBigLogo } from '../../components/logo/logo';
import { addCancelButton } from '../../components/buttons/cancelButton/cancelButton';
import { addFooter } from '../../components/footer/footes';
import { addTimer, FormatOfDate} from '../../components/timers/timers';
import { addCommonButton } from "../../components/buttons/commonButton/commonButton";
import { addheaderName } from '../../components/headerName/headerName';
import img from '../../assets/images/money.png';

function bankingServicesPage(): void {
    const container = getHTMLElement('.container');
    container.innerHTML = '';

    //header 
    const header = addHeader(container); 
    addheaderName(header, img, "Банківськи послуги");
   
    addCancelButton(header);

    const page: HTMLElement = document.createElement('div');
    page.classList.add('page');
    page.id = Pages.BankingServicesPage;
    page.classList.add(Pages.BankingServicesPage);
  

    function showBankingServicesPanel() {
        page.innerHTML = '';
        addCommonButton(page, alert, img, 'поповнити картку', '40%');
        addCommonButton(page, ()=>{alert('баланс за карткою')}, img, 'баланс за карткою', '40%');
        addCommonButton(page, ()=>{alert('')}, img, 'отримати готівку', '40%');
        addCommonButton(page, ()=>{alert('вибачте грошей немає')}, undefined, 'отримати 3 млн готівкою', '40%');
        addCommonButton(page, ()=>{alert('кнопочка не працює')}, undefined, undefined, '40%');
    }
    showBankingServicesPanel();

    container.append(page);  
    const footer = addFooter(container);

    addTimer(footer, FormatOfDate['DD month YYYY']);
    addTimer(footer, FormatOfDate['HH:MM']);
    
}

export default bankingServicesPage