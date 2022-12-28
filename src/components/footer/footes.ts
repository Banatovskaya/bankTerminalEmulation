import './footer.scss';

export function addFooter(elementToAppend: HTMLElement) : HTMLElement {
    const footer: HTMLElement = document.createElement('footer');
    footer.classList.add('footer');
    elementToAppend.append(footer);
    return footer;
}
