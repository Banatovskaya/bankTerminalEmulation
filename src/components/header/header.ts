import './header.scss';

export function addHeader(elementToAppend: HTMLElement) : HTMLElement {
    const header: HTMLElement = document.createElement('header');
    header.classList.add('header');
    elementToAppend.append(header);
    return header;
}
