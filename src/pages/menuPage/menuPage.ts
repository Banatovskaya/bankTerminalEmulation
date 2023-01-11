import './menuPage.scss';
import { Pages } from "../../interfaces/interfaces";
import otherServicesPage from '../otherServisesPage/otherServicesPage';
import bankingServicesPage from '../bankingServisesPage/bankingServicesPage';
import topUpCardPage from '../topUpCardPage/topUpCardPage';
import { getHTMLElement } from "../../services/getElement";
import { ClientData } from "../../interfaces/interfaces";
import { addHeader } from '../../components/header/header';
import { addBigLogo } from '../../components/logo/logo';
import { addCancelButton } from '../../components/buttons/cancelButton/cancelButton';
import { addFooter } from '../../components/footer/footes';
import { addTimer, FormatOfDate} from '../../components/timers/timers';
import { addCommonButton } from "../../components/buttons/commonButton/commonButton";
import img from '../../assets/images/money.png';


function menuPage(data: ClientData): void {

    const container = getHTMLElement('.container');
    container.innerHTML = '';
    
    //header
    const header = addHeader(container);  
    addBigLogo(header);
    addCancelButton(header);

    //middle -> Page
    const page: HTMLElement = document.createElement('div');
    page.classList.add('page');
    page.id = Pages.MenuPage;
    page.classList.add(Pages.MenuPage);
    //left side -> sideBar
    const sideBar:HTMLElement = document.createElement('div');
    sideBar.classList.add('menuPage__sideBar');
    sideBar.innerHTML = `<div class="menuPage__sideBarName">РОЗДІЛИ</в>`;
    page.append(sideBar);
    //right side -> content
    const content:HTMLElement = document.createElement('div');
    content.classList.add('menuPage__content');
    content.innerHTML = `<div class="menuPage__contentName">ПОСЛУГИ</div>`;
    const contentWrap:HTMLElement = document.createElement('div');
    contentWrap.classList.add('menuPage__contentWrap'); 
    content.append(contentWrap);     
    page.append(content);
     
    function showContent() {
        addCommonButton(contentWrap, topUpCardPage, img, 'поповнити картку', '40%');
        addCommonButton(contentWrap, ()=>{alert('не працює')}, undefined, 'поповнити мобільний', '40%');
        addCommonButton(contentWrap, ()=>{alert('не працює')}, undefined, undefined, '40%');
    };

    function showSideBar() {
        addCommonButton(sideBar, bankingServicesPage, img, 'банківськи послуги');
        addCommonButton(sideBar, otherServicesPage, img, 'інші операції', );
        addCommonButton(sideBar, ()=>{alert('не працює')}, undefined, undefined, '40%');
        addCommonButton(sideBar, ()=>{alert('не працює')}, undefined, undefined, '40%');
        addCommonButton(sideBar, ()=>{alert('не працює')}, undefined, undefined, '40%');
        addCommonButton(sideBar, ()=>{alert('не працює')}, undefined, undefined, '40%');
        addCommonButton(sideBar, ()=>{alert('не працює')}, undefined, undefined, '40%');
        addCommonButton(sideBar, ()=>{alert('не працює')}, undefined, undefined, '40%');
    }

    showContent();
    showSideBar();
    container.append(page);  

    //footer
    const footer = addFooter(container);
    addTimer(footer, FormatOfDate['DD month YYYY']);
    addTimer(footer, FormatOfDate['HH:MM']);
    
}

export default menuPage