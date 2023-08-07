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
import getMoneyPage from '../getMoneyPage/getMoneyPage';
import cardBallancePage from '../cardBallancePage/cardBallancePage';
import { Languages } from '../../services/mainLanguage';
import { mainLanguage } from '../../services/mainLanguage';

function bankingServicesPage(): void {
    const container = getHTMLElement('.container');
    container.innerHTML = '';

    //header 
    const header = addHeader(container); 
    addheaderName(header, img, `${mainLanguage==Languages.Ukrainian?'Банківськи послуги':'Bank servises'}`);
    addCancelButton(header);

     // middle -> Page
    const page: HTMLElement = document.createElement('div');
    page.classList.add('page');
    page.id = Pages.BankingServicesPage;
    page.classList.add(Pages.BankingServicesPage);
  
    function showBankingServicesPanel() {
        page.innerHTML = '';
        addCommonButton(page, topUpCardPage, img, `${mainLanguage==Languages.Ukrainian?'поповнити картку':'top up the card'}`, '30%');
        addCommonButton(page, cardBallancePage, img, `${mainLanguage==Languages.Ukrainian?'баланс за карткою':'card balance'}`, '30%');
        addCommonButton(page, getMoneyPage, img, `${mainLanguage==Languages.Ukrainian?'отримати готівку':'get cash'}`, '30%');
        // addCommonButton(page, ()=>{alert('does not work')}, undefined, undefined, '30%');
    }
    showBankingServicesPanel();

    container.append(page);  

    //footer
    const footer = addFooter(container);
    addBackButton(footer, menuPage, );
    addTimer(footer, FormatOfDate['DD month YYYY']);
    addTimer(footer, FormatOfDate['HH:MM']);
}

export default bankingServicesPage