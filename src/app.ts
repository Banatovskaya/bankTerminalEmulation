import startPage from "./pages/startPage/startPage";

export const enum Pages {
    StartPage = 'start-page',
    MenuPage = 'menu-page' 
}

// export let pageState: Pages = Pages.StartPage

// export function changePageState(state:Pages){
//     pageState = state;
//     console.log(pageState, "state")
// }


// export function renderPage() : void {
//     const container = getContainer();
//     let pageContent:HTMLElement

//     switch(pageState) {
//     default:
//         startPage();
//         console.log('start')
//        break;
//     case Pages.MenuPage:
//        menuPage()
//        console.log('menu') 
//        break;
//     }
// }

export function getContainer(): HTMLElement {
    const elem: HTMLElement | null = document.querySelector('.container');
    if (elem === null){
        console.log('err')
        throw "container doesn`t exist"
    } 
        const container : HTMLElement = elem     
    return container
}

function app():void {
    startPage()
}

export default app
