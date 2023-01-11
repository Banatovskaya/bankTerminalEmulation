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
import img from '../../assets/images/money.png';

function otherServicesPage(): void {
    const container = getHTMLElement('.container');
    container.innerHTML = '';
    
    const page: HTMLElement = document.createElement('div');
    page.classList.add('page');
    const header = addHeader(container);  
    addBigLogo(header);
    addCancelButton(header);
    page.id = Pages.OtherServicesPage;
    page.classList.add(Pages.OtherServicesPage);

    function showOtherServicesPanel() {
        page.innerHTML = '';
        addCommonButton(page, alert, img, 'змінити ПІНкод', '40%');
        addCommonButton(page, ()=>{alert('не працює')}, undefined, undefined, '40%');
        addCommonButton(page, ()=>{alert('не працює')}, undefined, undefined, '40%');
    }
    showOtherServicesPanel()

    container.append(page);  
    const footer = addFooter(container);

    addTimer(footer, FormatOfDate['DD month YYYY']);
    addTimer(footer, FormatOfDate['HH:MM']);
    

}
export default otherServicesPage