import './bankingServicesPage.scss';
import { Pages } from "../../interfaces/interfaces";
import topUpCardPage from '../topUpCardPage/topUpCardPage';
import { getHTMLElement } from "../../services/getElement";
import { addHeader } from '../../components/header/header';
import { addCancelButton } from '../../components/buttons/cancelButton/cancelButton';
import { addFooter } from '../../components/footer/footes';
import { addTimer, FormatOfDate} from '../../components/timers/timers';
import { addCommonButton } from "../../components/buttons/commonButton/commonButton";
import { addheaderName } from '../../components/headerName/headerName';
import img from '../../assets/images/money.png';
import { addBackButton } from '../../components/buttons/backButton/backButton';
import menuPage from '../menuPage/menuPage';

function bankingServicesPage(): void {
    const container = getHTMLElement('.container');
    container.innerHTML = '';

    //header 
    const header = addHeader(container); 
    addheaderName(header, img, "Банківськи послуги");
    addCancelButton(header);

     // middle -> Page
    const page: HTMLElement = document.createElement('div');
    page.classList.add('page');
    page.id = Pages.BankingServicesPage;
    page.classList.add(Pages.BankingServicesPage);
  
    function showBankingServicesPanel() {
        page.innerHTML = '';
        addCommonButton(page, topUpCardPage, img, 'поповнити картку', '30%');
        addCommonButton(page, ()=>{alert('баланс за карткою')}, img, 'баланс за карткою', '30%');
        addCommonButton(page, ()=>{alert('')}, img, 'отримати готівку', '30%');
        addCommonButton(page, ()=>{alert('вибачте грошей немає')}, undefined, 'отримати 3 млн готівкою', '30%');
        addCommonButton(page, ()=>{alert('кнопочка не працює')}, undefined, undefined, '30%');
    }
    showBankingServicesPanel();

    container.append(page);  

    //footer
    const footer = addFooter(container);
    addBackButton(footer, menuPage, 'назад');
    addTimer(footer, FormatOfDate['DD month YYYY']);
    addTimer(footer, FormatOfDate['HH:MM']);
}

export default bankingServicesPage