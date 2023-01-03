import './startPage.scss';
import img from '../../assets/images/putCard.jpg';
import { getHTMLElement } from '../../servises/getElement';
import { Pages } from "../../app";
import menuPage from "../menuPage/menuPage";
import { addTimer } from '../../components/timers/timers';
import { formatOfDate } from '../../components/timers/timers';
import { addHeader } from '../../components/header/header';
import { addBigLogo } from '../../components/logo/logo';
import { addPinCode } from '../../components/pinCode/pinCode';
import { addFooter } from '../../components/footer/footes';
import { addCancelButton } from '../../components/buttons/cancelButton/cancelButton';

function startPage(): void {

    const container = getHTMLElement('.container');
    container.innerHTML = '';
    const page: HTMLElement = document.createElement('div');
    page.classList.add('page');
  
    const header = addHeader(container);  //if we need a variable for next manipulation
    addBigLogo(header); // in this case we don`t need a variable for next manipulation    
    page.classList.add(Pages.StartPage);
    page.id = Pages.StartPage;
        page.innerHTML = `  <div class="start-page__img-wrap">
                                <img class="start-page__img" src=${img} alt="img putCard">
                            </div> 
                            <div class='start-page__text-wrap'>
                                <div class='start-page__select'>
                                    <h1 class='start-page__text'>Вставте картку</h1>
                                    <select name="cards" class="selectCards">
                                        <option value="none" selected="selected" disabled="disabled">выберите карту</option>
                                        <option value="1">PIN 1111</option>
                                        <option value="2">PIN 2222</option>
                                        <option value="3">PIN 3333</option>
                                        <option value="4">PIN 4444</option>
                                    </select>
                                </div> 
                            </div>`;
    container.append(page); 
    const startPageTextWrap: HTMLElement = page.querySelector('.start-page__text-wrap')!;
    
    const select:HTMLSelectElement = document.querySelector('.selectCards')!;

    select.addEventListener('change', async(e)=>{
        startPageTextWrap.innerHTML = ``;
        addCancelButton(header);
        const cardId = select.value;
        const pinCode = await addPinCode(startPageTextWrap)
        console.log('pin startpage',pinCode)
        if (pinCode) {menuPage()}

    
    })
    


    const footer = addFooter(container);

    // addTimer(footer, formatOfDate['HH:MM']);
    // addTimer(footer, formatOfDate['DD month YYYY']);
    addTimer(footer, formatOfDate['HH:MM week/dd.mm.yy']);

    // container.addEventListener('click', () => {
    //    menuPage()
    //     }
    // )
}

export default startPage