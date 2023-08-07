import './cancelButton.scss';
import img from '../../../assets/images/quit.png';
import startPage from '../../../pages/startPage/startPage';
import { Languages } from '../../../services/mainLanguage';
import { mainLanguage } from '../../../services/mainLanguage';

export function addCancelButton(elementToAppend: HTMLElement): HTMLButtonElement {
    const button:HTMLButtonElement = document.createElement('button');
    button.classList.add('cancel');
    button.innerHTML = `<img src=${img}><div>${mainLanguage==Languages.Ukrainian?'Завершити':'Finish'}</div>`;
    elementToAppend.append(button);
    button.addEventListener('click', () => startPage());
    return button;
}