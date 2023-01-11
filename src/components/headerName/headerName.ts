import './headerName.scss';
import imgDafault from '../../assets/images/3d-square1.png';

export function addheaderName(elementToAppend: HTMLElement, img:ImageData = imgDafault, title: string = ''): HTMLElement {
    const headerName:HTMLElement = document.createElement('headerName');
    headerName.classList.add('headerName');
    headerName.innerHTML = `<img class="headerName__img" src=${img}></img><div class="headerName__text">${title}</div>`;
    elementToAppend.append(headerName);
    return headerName;
}