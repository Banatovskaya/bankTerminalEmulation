import './pinCode.scss';
import { getHTMLElement } from '../../services/getElement';
import { addForwardButton } from '../buttons/forwardButton/forwardButton';
import { addBackButton } from '../buttons/backButton/backButton';
import { Languages } from '../../services/mainLanguage';
import { mainLanguage } from '../../services/mainLanguage';

export async function addPinCode(elementToAppend: HTMLElement) : Promise<string> {
    
    const pin: HTMLElement = document.createElement('div');
    pin.classList.add('pin');
    pin.innerHTML = `<div class = "pin__text">${mainLanguage==Languages.Ukrainian?'введіть ПІН':'enter PIN'}</div>
                    <input class="pin__input" type='password' maxlength=4/>`;
    elementToAppend.append(pin);
    const input = pin.querySelector('input')!;
    input.focus();

    // promise which send pin 
    const promise: Promise<string> = new Promise((resolve, reject) => {

        let pinCode:string;

        // add wrap whith hidden buttons in to footer
        const footer : HTMLElement = getHTMLElement('footer');
        document.querySelector('.buttonWrap')?.remove(); // for next efforts
        const buttonWrap = document.createElement('div');
        buttonWrap.classList.add('buttonWrap');
        const backButton = addBackButton(buttonWrap, deleteLastSign, `${mainLanguage==Languages.Ukrainian?'коригувати':'to correct'}`);
        backButton.classList.add('marginLR');
        backButton.style.visibility = 'hidden';
        const forwardButton = addForwardButton(buttonWrap, sendPinCode, `${mainLanguage==Languages.Ukrainian?'підтвердити':'to confirm'}`); 
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
            }
        })
    })

    let PIN = await promise;

    return PIN;
}