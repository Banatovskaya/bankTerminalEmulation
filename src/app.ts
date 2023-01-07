// import './normalize.scss';
import './index.scss';

import startPage from "./pages/startPage/startPage";

export const enum Pages {
    StartPage = 'start-page',
    MenuPage = 'menu-page' 
}

function app():void {
    startPage()
}

export default app
