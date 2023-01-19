import './topUpCardPage.scss';
import { Pages } from "../../interfaces/interfaces";
import menuPage from '../menuPage/menuPage';
import { getHTMLElement } from "../../services/getElement";
import { addHeader } from '../../components/header/header';
import { addCancelButton } from '../../components/buttons/cancelButton/cancelButton';
import { addFooter } from '../../components/footer/footes';
import { addTimer, FormatOfDate} from '../../components/timers/timers';
import { addheaderName } from '../../components/headerName/headerName';
import { addBackButton } from '../../components/buttons/backButton/backButton';
import { addKeyBoard } from '../../components/keyBoard/keyBoard';
import { addForwardButton } from '../../components/buttons/forwardButton/forwardButton';
import { addBigMessageComponent } from '../../components/bigMessage/bigMessage';
import { addErrorMessageDiv } from '../../components/errMessageDiv/errMessageDiv';
import img from '../../assets/images/money.png';

function topUpCardPage(): void {
    const container = getHTMLElement('.container');
    container.innerHTML = '';

    //header 
    const header = addHeader(container); 
    addheaderName(header, img, "Поповнити картку");
    addCancelButton(header);

    // middle -> Page
    const page: HTMLElement = document.createElement('div');
    page.classList.add('page');
    page.id = Pages.TopUpCardPage;
    page.classList.add(Pages.TopUpCardPage);
    page.innerHTML = `<div class="topUpCardPage__input"><input placeholder="1000" type='text' pattern="[0-9]{1,6}" autofocus="autofocus"></div>
                      <div class="topUpCardPage__keysWrap"></div>`

    const input: HTMLInputElement = page.querySelector('input')!;
    const inputWrap: HTMLDivElement = page.querySelector('.topUpCardPage__input')!;
    const keysWrap: HTMLDivElement = page.querySelector('.topUpCardPage__keysWrap')!;

    let errMessage: HTMLDivElement = addErrorMessageDiv(inputWrap, '');
    errMessage.style.visibility = 'hidden';

    function addCheckingLogicToInputField(){
        if(input.value.length == 0){
            forwardButton.style.visibility = 'hidden';
            errMessage.style.visibility = 'hidden'; 
        } else if (+input.value[0] == 0){
            input.value = '';
        } else if(+input.value > 1000000){
            errMessage.style.visibility = 'visible'; 
            errMessage.innerHTML = 'внесіть сумму не більше 1 000 000 грн' ;
            forwardButton.style.visibility = 'hidden';
        } else {
            forwardButton.style.visibility = 'visible';
            errMessage.style.visibility = 'hidden'; 
        };
    }

    function showBigMessageComponents(){
        addBigMessageComponent(page, 'покладіть гроші в купюроприймач і натисніть ОК', ()=>{
            addBigMessageComponent(page, 'рахунок поповнено',);
        });
        input.value = '';   
        forwardButton.style.visibility = 'hidden';
    };

    const keyBoard = addKeyBoard(keysWrap, input); 

    keyBoard.addEventListener('click', ()=>{
        input.focus();
        addCheckingLogicToInputField();
    })

    // events for common kayboard
    input.addEventListener('keyup', (e)=>{
        if ((input.value.match(/^\d+$/)) ){
            addCheckingLogicToInputField();
        }
        else {
            input.value = '';
            forwardButton.style.visibility = 'hidden';
            errMessage.style.visibility = 'visible'; 
            errMessage.innerHTML = 'тільки цифри'  ;        
        }
    })
       
    container.append(page);  

    //footer
    const footer = addFooter(container);
    addBackButton(footer, menuPage, 'назад');
    addTimer(footer, FormatOfDate['DD month YYYY']);   
    const forwardButton = addForwardButton(footer, showBigMessageComponents, 'Далі');
    forwardButton.style.visibility = 'hidden';
}

export default topUpCardPage