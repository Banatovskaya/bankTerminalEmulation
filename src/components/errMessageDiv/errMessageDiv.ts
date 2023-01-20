import './errMessageDiv.scss';

export function addErrorMessageDiv(elementToAppend: HTMLElement, text: string):HTMLDivElement {
    const errMessageDiv : HTMLDivElement = document.createElement('div');
    errMessageDiv.classList.add('errMessageDiv');
    errMessageDiv.innerHTML = text;
    elementToAppend.append(errMessageDiv);
    return errMessageDiv
}