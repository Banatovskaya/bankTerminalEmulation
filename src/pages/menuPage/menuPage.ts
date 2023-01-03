import { Pages } from "../../app";
import { getHTMLElement } from "../../servises/getElement";
import startPage from "../startPage/startPage";

function menuPage(): void {
    const container = getHTMLElement('.container');
    container.innerHTML = '';
    
    let page: HTMLElement = document.createElement('div');
    page.classList.add('page');
    page.id = Pages.MenuPage;

    page.innerText = 'menuPage';

    container.append(page);  

    
}

export default menuPage