import './logo.scss';
import img from '../../assets/images/logo.png'

export function addBigLogo(elementToAppend: HTMLElement) : HTMLElement {
    const bigLogo: HTMLElement = document.createElement('div');
    bigLogo.classList.add('bigLogo');
    bigLogo.innerHTML = ` <div class="bigLogo__imgWrap">
                              <img class="bigLogo__img" src=${img} alt="logo">
                          </div>
                          <div class="bigLogo__name">SuperBank</div>`

    elementToAppend.append(bigLogo);
    return bigLogo;
}