export function getHTMLElement(selector:string): HTMLElement {
    const elem: HTMLElement | null = document.querySelector(selector);
    if (elem === null){
        throw "element doesn`t exist";
    }   
    return elem;
}
