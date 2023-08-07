import './commonButton.scss';
import imgDafault from '../../../assets/images/3d-square1.png';

export function addCommonButton(elementToAppend: HTMLElement, func : Function, img:ImageData = imgDafault, buttonName: string = 'ця кнопочка не працює', width = ''): HTMLButtonElement {
    const button:HTMLButtonElement = document.createElement('button');
    button.classList.add('commonButton');
    button.innerHTML = `<img class="commonButton__img" src=${img}><div class="commonButton__text">${buttonName}</div>`;
    elementToAppend.append(button);
    button.style.width = width;
    button.addEventListener('click', () => {
        console.log('fff')
        func()
    });
    return button;
}