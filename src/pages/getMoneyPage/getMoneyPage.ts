import './getMoneyPage.scss';
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
import { addBigMessageComponent } from '../../components/bigMessage/bigMessage';
import { addForwardButton } from '../../components/buttons/forwardButton/forwardButton';
import { addErrorMessageDiv } from '../../components/errMessageDiv/errMessageDiv';
import { ClientData } from '../../interfaces/interfaces';
import { getClientData, setClientData } from '../../services/data';
import { request } from '../../services/http';
import img from '../../assets/images/money.png';

function getMoneyPage(): void {
    const container = getHTMLElement('.container');
    container.innerHTML = '';

    //header 
    const header = addHeader(container); 
    addheaderName(header, img, "виплата готівки");
    addTimer(header, FormatOfDate['DD month YYYY']);   
    addCancelButton(header);

     // middle -> Page
    const page: HTMLElement = document.createElement('div');
    page.classList.add('page');
    page.id = Pages.GetMoneyPage;
    page.classList.add(Pages.GetMoneyPage);
    page.innerHTML = `  <div class="getMoneyPage__inputWrap">
                            <div class="getMoneyPage__buttonsWrap">
                                <button class="getMoneyPage__button getMoneyPage__button_left" value="500">500 грн</button>
                                <button class="getMoneyPage__button getMoneyPage__button_right" value="1000">1000 грн</button>
                                <button class="getMoneyPage__button getMoneyPage__button_left" value="2000">2000 грн</button>
                                <button class="getMoneyPage__button getMoneyPage__button_right" value="5000">5000 грн</button>
                            </div>
                            <div class="getMoneyPage__inputDiv">
                                <input placeholder="1000" type='text' pattern="[0-9]{1,5}" autofocus="autofocus">
                            </div>
                            
                        </div>
                        <div class="getMoneyPage__keysWrap"></div>`

    const input: HTMLInputElement = page.querySelector('input')!;
    const inputDiv: HTMLDivElement = page.querySelector('.getMoneyPage__inputDiv')!;
    const keysWrap: HTMLDivElement = page.querySelector('.getMoneyPage__keysWrap')!;
    const buttons: NodeListOf<HTMLButtonElement> = page.querySelectorAll('.getMoneyPage__button');

    buttons.forEach(button => {
        button.addEventListener('click', ()=>{
            input.value = button.value;
            forwardButton.style.visibility = 'visible';
            input.focus();
            errMessage.style.visibility = 'hidden'; 
        })
    });

    let errMessage: HTMLDivElement = addErrorMessageDiv(inputDiv, '');
    errMessage.style.visibility = 'hidden';

     // I haven`t done this function separare component because every input can have differente checking
    function addCheckingLogicToInputField(){
        if(input.value.length == 0){
            forwardButton.style.visibility = 'hidden';
            errMessage.style.visibility = 'hidden'; 
        } else if (+input.value[0] == 0){
            input.value = '';
        } else if(+input.value % 100 ){
            errMessage.style.visibility = 'visible'; 
            errMessage.innerHTML = 'введіть сумму кратну 100' ;
            forwardButton.style.visibility = 'hidden';
        } else if(+input.value > 10000){
            errMessage.style.visibility = 'visible'; 
            errMessage.innerHTML = 'введіть сумму не більше 10 000 грн' ;
            forwardButton.style.visibility = 'hidden';
        } else {
            forwardButton.style.visibility = 'visible';
            errMessage.style.visibility = 'hidden';
        }; 
    }

    function giveMoney(value:String){
        let data = getClientData();
        if (data.cashBalance < +value){
            addBigMessageComponent(page, 'недостатньо грошей')
        } else{
            addBigMessageComponent(page, 'отримайте гроші', ()=>{
                let newClientData: ClientData;
                newClientData = {...data};
                newClientData.cashBalance = data.cashBalance - (+value);    
                request(data.id, undefined, 'PUT', JSON.stringify(newClientData))
                .then(()=>{
                    setClientData(newClientData);
                })
            });
            input.value = '';   
            forwardButton.style.visibility = 'hidden';  
        }
        
    };

    const keyBoard = addKeyBoard(keysWrap, input); 

    keyBoard.addEventListener('click', ()=>{
        input.focus();
        addCheckingLogicToInputField();
    })

    // events for common kayboard
    input.addEventListener('keyup', ()=>{
        if ((input.value.match(/^\d+$/)) ){
            addCheckingLogicToInputField();
        }
        else {
            input.value = '';
            forwardButton.style.visibility = 'hidden';
            errMessage.style.visibility = 'visible'; 
            errMessage.innerHTML = 'взагалі на терміналі немає букв, тільки цифри' ;        
        }
    })
    
    container.append(page);  

     //footer
    const footer = addFooter(container);
    addBackButton(footer, menuPage, 'назад');
    const forwardButton = addForwardButton(footer, ()=> giveMoney(input.value), 'Далі');
    forwardButton.style.visibility = 'hidden';
}

export default getMoneyPage