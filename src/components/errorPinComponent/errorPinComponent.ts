import './errorPinComponent.scss';

export function addErrorPinComponent(elementToAppend: HTMLElement, message: string, func: Function = ()=>{}): HTMLElement {
    const errorPinComponent:HTMLElement = document.createElement('div');
    errorPinComponent.classList.add('errorPinComponent');
    errorPinComponent.innerHTML = `<div class = "errorPinComponent__wrap">
                                        <div class = "errorPinComponent__message">${message}</div>
                                        <button class = "errorPinComponent__button">OK</button>
                                    </div>`;
    elementToAppend.append(errorPinComponent);
    const button = errorPinComponent.querySelector("button");
    button?.focus();
    button?.addEventListener('click', () => {
        errorPinComponent.remove();
        func();
    });

    return errorPinComponent;
}