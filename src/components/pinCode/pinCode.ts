import './pinCode.scss';
import { getHTMLElement } from '../../services/getElement';
import { addForwardButton } from '../buttons/forwardButton/forwardButton';
import { addBackButton } from '../buttons/backButton/backButton';
import { addErrorMessageDiv } from '../errMessageDiv/errMessageDiv';

export async function addPinCode(elementToAppend: HTMLElement) : Promise<string> {
    
    const pin: HTMLElement = document.createElement('div');
    pin.classList.add('pin');
    pin.innerHTML = `<div class = "pin__text">введите ПИН</div>
                    <input class="pin__input" type='password' maxlength=4/>`;
    elementToAppend.append(pin);
    const input = pin.querySelector('input')!;
    input.focus();

    // promise which wait select of card and send pin 
    const promise: Promise<string> = new Promise((resolve, reject) => {

        let pinCode:string;
        
        const errText:HTMLDivElement = addErrorMessageDiv(pin, 'PIN повинен містити лише цифри');
        errText.style.visibility = 'hidden' ;

        // add wrap whith hidden buttons in to footer
        const footer : HTMLElement = getHTMLElement('footer');
        document.querySelector('.buttonWrap')?.remove(); // for next efforts
        const buttonWrap = document.createElement('div');
        buttonWrap.classList.add('buttonWrap');
        const backButton = addBackButton(buttonWrap, deleteLastSign, 'коригувати');
        backButton.classList.add('marginLR');
        backButton.style.visibility = 'hidden';
        const forwardButton = addForwardButton(buttonWrap, sendPinCode, 'підтвердити'); 
        forwardButton.classList.add('marginLR');
        forwardButton.style.visibility = 'hidden';

        function deleteLastSign() : void {
            input.value = input.value.slice(0, -1);
            if (input.value.length === 0) {
                backButton.style.visibility = 'hidden';
            }; 
            input.focus();
            forwardButton.style.visibility = 'hidden';
        }

        function sendPinCode() : void {
            resolve(pinCode)
        };    

        footer.append(buttonWrap);     
        // check input, show or hide buttons
        input.addEventListener('keyup', ()=>{
            if (input.value.match(/\d+$/)){
                errText.style.visibility = 'hidden';
                backButton.style.visibility = 'hidden';
                backButton.style.visibility = 'visible';

                if (input.value.length == 4){
                    pinCode = input.value;
                    forwardButton.style.visibility = 'visible';
                    forwardButton.focus();
                }
                 else forwardButton.style.visibility = 'hidden';
            } else {
                input.value = '';  
                backButton.style.visibility = 'hidden';
                errText.style.visibility = 'visible';
            }
        })
    })

    let PIN = await promise;

    return PIN;
}