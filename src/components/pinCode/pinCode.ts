import './pinCode.scss';

export function addPinCode(elementToAppend: HTMLElement) : void {
    const pin: HTMLElement = document.createElement('div');
    pin.classList.add('pin');
    pin.innerHTML = `<div class = "pin__text">введите ПИН</div>
                    <div class="pin__input-wrap">
                        <input class="pin__input" type='password' maxlength=1/>
                        <input class="pin__input" type='password' maxlength=1/>
                        <input class="pin__input" type='password' maxlength=1/>
                        <input class="pin__input" type='password' maxlength=1/>
                    </div>`;
    elementToAppend.append(pin);
    
}