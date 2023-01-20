import './bigMessage.scss';

export function addBigMessageComponent(elementToAppend: HTMLElement, message: string, func: Function = ()=>{}): HTMLElement {
    const component:HTMLElement = document.createElement('div');
    component.classList.add('bigMessageComponent');
    component.innerHTML = `<div class = "bigMessageComponent__wrap">
                                        <div class = "bigMessageComponent__message">${message}</div>
                                        <button class = "bigMessageComponent__button">OK</button>
                                    </div>`;
    elementToAppend.append(component);
    const button = component.querySelector("button");
    button?.focus();
    button?.addEventListener('click', () => {
        component.remove();
        func();
    });

    return component;
}