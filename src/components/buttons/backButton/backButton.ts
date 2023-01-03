import './backButton.scss';
import img from '../../../assets/images/arrowLeft.png';

export function addBackButton(elementToAppend: HTMLElement, func : Function , buttonName = 'Назад'): HTMLButtonElement {
    const button:HTMLButtonElement = document.createElement('button');
    button.classList.add('backButton');
    button.innerHTML = `<div class="backButton"><img class="backButton__img" src=${img}></img>${buttonName}</div>`;
    elementToAppend.append(button);
    button.addEventListener('click', () => func());
    return button;
}