import './pinCode.scss';

export function addPinCode(elementToAppend: HTMLElement) : void {
    const pin: HTMLElement = document.createElement('div');
    pin.classList.add('pin');
    pin.innerHTML = `<div class = "pin__text">введите ПИН</div>
                    <div class="pin__input-wrap">
                        <input class="pin__input" type='password' maxlength=1 autofocus/>
                        <input class="pin__input" type='password' maxlength=1/>
                        <input class="pin__input" type='password' maxlength=1 />
                        <input class="pin__input" type='password' maxlength=1/>
                    </div>`;
    elementToAppend.append(pin);
    const arrOfInputs = pin.querySelectorAll('input')

    arrOfInputs.forEach((input, index) => {
        input.addEventListener('keyup', ()=>{
            const errPinMessage = document.createElement('div');
            const errText = pin.querySelector('.pin__err-type');
            errPinMessage.innerHTML=`PIN повинен містити лише цифри`;
            
            if(input.value.match(/[0-9]/)){
                errText?.remove();
                if (index < arrOfInputs.length - 1 ){
                    arrOfInputs[index+1].focus();
                } else {input.blur()}
            } else {
                input.value = '';     
                if(!errText){
                    errPinMessage.classList.add('pin__err-type');
                    pin.append(errPinMessage);
                }   
            }
        })
    });
}