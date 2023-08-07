import './menuPage.scss';
import { Pages } from "../../interfaces/interfaces";
import otherServicesPage from '../otherServisesPage/otherServicesPage';
import bankingServicesPage from '../bankingServisesPage/bankingServicesPage';
import topUpCardPage from '../topUpCardPage/topUpCardPage';
import topUpMobilePhone from '../topUpMobilePhone/topUpMobilePhone';
import { getHTMLElement } from "../../services/getElement";
import { addHeader } from '../../components/header/header';
import { addBigLogo } from '../../components/logo/logo';
import { addCancelButton } from '../../components/buttons/cancelButton/cancelButton';
import { addFooter } from '../../components/footer/footes';
import { addTimer, FormatOfDate} from '../../components/timers/timers';
import { addCommonButton } from "../../components/buttons/commonButton/commonButton";
import img from '../../assets/images/money.png';
import { addLanguagesPanel } from '../../components/languages/languages';
import { mainLanguage } from '../../services/mainLanguage';
import { Languages } from '../../services/mainLanguage';

function menuPage(): void {

    const container = getHTMLElement('.container');
    container.innerHTML = '';
    
    //header
    const header = addHeader(container);  
    addBigLogo(header);
    addLanguagesPanel(header, menuPage);
    addCancelButton(header);

    //middle -> Page
    const page: HTMLElement = document.createElement('div');
    page.classList.add('page');
    page.id = Pages.MenuPage;
    page.classList.add(Pages.MenuPage);
    //left side -> sideBar
    const sideBar:HTMLElement = document.createElement('div');
    sideBar.classList.add('menuPage__sideBar');
    sideBar.innerHTML = `<div class="menuPage__sideBarName">${mainLanguage==Languages.Ukrainian?'РОЗДІЛИ':'SECTIONS'}</в>`;
    page.append(sideBar);
    //right side -> content
    const content:HTMLElement = document.createElement('div');
    content.classList.add('menuPage__content');
    content.innerHTML = `<div class="menuPage__contentName">${mainLanguage==Languages.Ukrainian?'ПОСЛУГИ':'SERVISES'}</div>`;
    const contentWrap:HTMLElement = document.createElement('div');
    contentWrap.classList.add('menuPage__contentWrap'); 
    content.append(contentWrap);     
    page.append(content);
     
    function showContent() {
        addCommonButton(contentWrap, topUpCardPage, img, `${mainLanguage==Languages.Ukrainian?'поповнити картку':'top up the card'}`, '40%');
        addCommonButton(contentWrap, topUpMobilePhone, undefined, `${mainLanguage==Languages.Ukrainian?'поповнити мобільний':'top up mobile'}`, '40%');
    };

    function showSideBar() {
        addCommonButton(sideBar, bankingServicesPage, img, `${mainLanguage==Languages.Ukrainian?'банківські послуги':'bank servises'}`);
        addCommonButton(sideBar, otherServicesPage, img, `${mainLanguage==Languages.Ukrainian?'інші операції':'other operations'}`, );
        addCommonButton(sideBar, ()=>{alert('does not work')}, undefined, undefined, '42%');
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