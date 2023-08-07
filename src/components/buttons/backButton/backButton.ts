import './backButton.scss';
import img from '../../../assets/images/arrowLeft.png';
import { Languages } from '../../../services/mainLanguage';
import { mainLanguage } from '../../../services/mainLanguage';

export function addBackButton(elementToAppend: HTMLElement, func : Function , buttonName = `${mainLanguage==Languages.Ukrainian?'НАЗАД':'BACK'}`): HTMLButtonElement {
    const button:HTMLButtonElement = document.createElement('button');
    button.classList.add('backButton');
    button.innerHTML = `<img class="backButton__img" src=${img}><div>${buttonName}</div>`;
    elementToAppend.append(button);
    button.addEventListener('click', () => func());
    return button;
}