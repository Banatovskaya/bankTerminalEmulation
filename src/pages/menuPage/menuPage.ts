import { getContainer } from "../../app";
import { Pages } from "../../app";
import startPage from "../startPage/startPage";

function menuPage(): void {
    const container = getContainer();
    const oldPage = document.querySelector('.page');
    oldPage?.remove();
    let page: HTMLElement = document.createElement('div');
    page.classList.add('page');
    page.id = Pages.MenuPage;

    page.innerText = 'menuPage';

    container.append(page);  

    container.addEventListener('click', () => {
       startPage()
        }
    )
}

export default menuPage