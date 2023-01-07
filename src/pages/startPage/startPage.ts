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
import { checkPin } from '../../servises/checkPin';
import { addErrorPinComponent } from '../../components/errorPinComponent/errorPinComponent';

function startPage(): void {

    let effortNumbers = 3;
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
                                    <option value="1111">PIN 1111</option>
                                    <option value="2222">PIN 2222</option>
                                    <option value="3333">PIN 3333</option>
                                    <option value="4444">PIN 4444</option>
                                </select>
                            </div> 
                        </div>`;
    container.append(page); 
    const startPageTextWrap: HTMLElement = page.querySelector('.start-page__text-wrap')!;
    const select:HTMLSelectElement = document.querySelector('.selectCards')!;

    select.addEventListener('change', (e)=>{
        startPageTextWrap.innerHTML = ``;
        addCancelButton(header);
        const cardId = select.value;

        async function getPinCode(){
            startPageTextWrap.innerHTML = ``;
            const pinCode = await addPinCode(startPageTextWrap);
            const data = await checkPin(cardId, pinCode)
            if(data){
                menuPage()
            }  else {
                if (effortNumbers > 1){
                    effortNumbers = effortNumbers - 1;
                addErrorPinComponent(container, `невірний пінкод залишилось спроб ${effortNumbers}` , getPinCode);
                } else {
                    addErrorPinComponent(container, "Картку вилучено" , startPage);
                }
            }
        }
        getPinCode(); 
    })

    const footer = addFooter(container);

    // addTimer(footer, formatOfDate['HH:MM']);
    // addTimer(footer, formatOfDate['DD month YYYY']);
    addTimer(footer, formatOfDate['HH:MM week/dd.mm.yy']);
}

export default startPage