import './topUpCardPage.scss';
import { Pages } from "../../interfaces/interfaces";
import { getHTMLElement } from "../../services/getElement";
import { ClientData } from "../../interfaces/interfaces";
import { addHeader } from '../../components/header/header';
import { addBigLogo } from '../../components/logo/logo';
import { addCancelButton } from '../../components/buttons/cancelButton/cancelButton';
import { addFooter } from '../../components/footer/footes';
import { addTimer, FormatOfDate} from '../../components/timers/timers';
import { addCommonButton } from "../../components/buttons/commonButton/commonButton";
import img from '../../assets/images/money.png';

function topUpCardPage(): void {
    const container = getHTMLElement('.container');
    container.innerHTML = '';
    
    const page: HTMLElement = document.createElement('div');
    page.classList.add('page');
    const header = addHeader(container);  
    addBigLogo(header);
    addCancelButton(header);
    page.id = Pages.TopUpCardPage;
    page.classList.add(Pages.TopUpCardPage);
  

   

    container.append(page);  
    const footer = addFooter(container);

    addTimer(footer, FormatOfDate['DD month YYYY']);
    
    
}

export default topUpCardPage