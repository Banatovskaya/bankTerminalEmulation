import './cardBallancePage.scss';
import { Pages } from "../../interfaces/interfaces";
import { ClientData } from "../../interfaces/interfaces";
import { addHeader } from '../../components/header/header';
import { addFooter } from '../../components/footer/footes';
import { getHTMLElement } from '../../services/getElement';
import { addheaderName } from '../../components/headerName/headerName';
import { addCancelButton } from '../../components/buttons/cancelButton/cancelButton';
import { addBackButton } from '../../components/buttons/backButton/backButton';
import { addTimer, FormatOfDate } from '../../components/timers/timers';
import { clientData } from '../../services/data';
import menuPage from '../menuPage/menuPage';
import { Languages } from '../../services/mainLanguage';
import { mainLanguage } from '../../services/mainLanguage';

function cardBallancePage(): void {
    const container = getHTMLElement('.container');
    container.innerHTML = '';
    
    //header
    const header = addHeader(container);  
    addheaderName(header, undefined, "Баланс картки");
    addCancelButton(header);

    //middle -> Page
    const page: HTMLElement = document.createElement('div');
    page.classList.add('page');
    page.id = Pages.CardBallancePage;
    page.classList.add(Pages.CardBallancePage);
    const cash: ClientData = clientData;
    page.innerHTML = `  <div class="cardBallance">
                            <div class="cardBallance__value">${mainLanguage==Languages.Ukrainian?'залишок':'balance'}: ${cash.cashBalance} грн</div>
                        </div>`
    
    container.append(page);  

    //footer
    const footer = addFooter(container);
    addBackButton(footer, menuPage, );
    addTimer(footer, FormatOfDate['DD month YYYY']);
    addTimer(footer, FormatOfDate['HH:MM']);
}

export default cardBallancePage;