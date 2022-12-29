import './cancelButton.scss';
import img from '../../assets/images/quit.png';
import startPage from '../../pages/startPage/startPage';


export function addCancelButton(elementToAppend: HTMLElement): HTMLButtonElement {
    const button:HTMLButtonElement = document.createElement('button');
    button.classList.add('cancel');
    button.innerHTML = `<img src=${img}></img><div>Завершити</div>`;
    elementToAppend.append(button);
    button.addEventListener('click', () => startPage());
    return button;
}