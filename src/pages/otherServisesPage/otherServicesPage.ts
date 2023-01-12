import './otherServicesPage.scss';
import { Pages } from "../../interfaces/interfaces";
import { getHTMLElement } from "../../services/getElement";
import { ClientData } from "../../interfaces/interfaces";
import { addHeader } from '../../components/header/header';
import { addBigLogo } from '../../components/logo/logo';
import { addCancelButton } from '../../components/buttons/cancelButton/cancelButton';
import { addFooter } from '../../components/footer/footes';
import { addTimer, FormatOfDate} from '../../components/timers/timers';
import { addCommonButton } from "../../components/buttons/commonButton/commonButton";
import { addBackButton } from '../../components/buttons/backButton/backButton';
import { addheaderName } from '../../components/headerName/headerName';
import img from '../../assets/images/money.png';
import menuPage from '../menuPage/menuPage';

function otherServicesPage(): void {
    const container = getHTMLElement('.container');
    container.innerHTML = '';
    
    //header
    const header = addHeader(container);  
    addheaderName(header, img, "Інші операції");
    addCancelButton(header);

    // middle -> Page
    const page: HTMLElement = document.createElement('div');
    page.classList.add('page');
    page.id = Pages.OtherServicesPage;
    page.classList.add(Pages.OtherServicesPage);

    function showOtherServicesPanel() {
        page.innerHTML = '';
        addCommonButton(page, alert, img, 'змінити ПІНкод', );
        addCommonButton(page, ()=>{alert('не працює')}, undefined, undefined, '100%');
        addCommonButton(page, ()=>{alert('не працює')}, undefined, undefined, '100%');
    }
    showOtherServicesPanel()

    container.append(page);  

    //footer
    const footer = addFooter(container);
    addBackButton(footer, menuPage, 'назад');
    addTimer(footer, FormatOfDate['DD month YYYY']);

}

export default otherServicesPage