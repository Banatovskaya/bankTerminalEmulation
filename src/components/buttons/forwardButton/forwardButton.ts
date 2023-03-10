import './forwardButton.scss';
import img from '../../../assets/images/arrowRight.png';

export function addForwardButton(elementToAppend: HTMLElement, func : Function, buttonName = 'Далі'): HTMLButtonElement {
    const button:HTMLButtonElement = document.createElement('button');
    button.classList.add('forwardButton');
    button.innerHTML = `<div>${buttonName}</div><img class="forwardButton__img" src=${img}>`;
    elementToAppend.append(button);
    button.addEventListener('click', () => {func()});
    return button;
}