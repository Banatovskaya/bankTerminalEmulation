import './forwardButton.scss';
import img from '../../../assets/images/arrowRight.png';
import { Languages } from '../../../services/mainLanguage';
import { mainLanguage } from '../../../services/mainLanguage';

export function addForwardButton(elementToAppend: HTMLElement, func : Function, buttonName = `${mainLanguage==Languages.Ukrainian?'ДАЛІ':'NEXT'}`): HTMLButtonElement {
    const button:HTMLButtonElement = document.createElement('button');
    button.classList.add('forwardButton');
    button.innerHTML = `<div>${buttonName}</div><img class="forwardButton__img" src=${img}>`;
    elementToAppend.append(button);
    button.addEventListener('click', () => {func()});
    return button;
}