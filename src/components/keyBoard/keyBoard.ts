import './keyBoard.scss';
import img from '../../assets/images/arrowLeft.png';

export function addKeyBoard(elementToAppend: HTMLElement, input: HTMLInputElement) : HTMLElement {
    const keyBoard: HTMLElement = document.createElement('div');
    keyBoard.classList.add('keyBoard');
    keyBoard.innerHTML = `  <div class="keyBoard__keys">
                                <button class="keyBoard__button" value="1">1</button>
                                <button class="keyBoard__button" value="2">2</button>
                                <button class="keyBoard__button" value="3">3</button>
                                <button class="keyBoard__button" value="4">4</button>
                                <button class="keyBoard__button" value="5">5</button>
                                <button class="keyBoard__button" value="6">6</button>
                                <button class="keyBoard__button" value="7">7</button>
                                <button class="keyBoard__button" value="8">8</button>
                                <button class="keyBoard__button" value="9">9</button>
                                <button class="keyBoard__button" value="clear">del</button>
                                <button class="keyBoard__button" value="0">0</button>
                                <button class="keyBoard__button" value="back"><img class="keyBoard__buttonImg" src=${img}></button> 
                            </div>`;
                               
    keyBoard.addEventListener('click', (e)=>{
        const target = e.target as HTMLButtonElement;
        // logic for every virtual button 
        if (target.className == 'keyBoard__button' && (/[0-9]/).test(target.value)  ){
           input.value = input.value + target.value;
        } else if (target.value == 'back' || target.className == 'keyBoard__buttonImg'){
            input.value = input.value.slice(0, -1);
        } else if (target.value == 'clear'){
            input.value = '';
        };
    })

    elementToAppend.append(keyBoard);
    
    return keyBoard;
}