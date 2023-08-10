import './languages.scss';
import { setMainLanguage } from '../../services/mainLanguage';
import { mainLanguage } from '../../services/mainLanguage';
import { Languages } from '../../services/mainLanguage';

export function addLanguagesPanel(elementToAppend: HTMLElement, elementToReLoad:Function) {

    const languageWrap:HTMLElement = document.createElement('div');
    languageWrap.classList.add('languages');
    
    let options;
    for (let key in Languages){
        let selected = '';
        if (mainLanguage == (Languages as any)[key]){selected = 'selected'}
        options = options +  `<option 
             key=${(Languages as any)[key]}
             ${selected}
             >${(Languages as any)[key]}
        </option>`
    }
       
    const selectTag = `<select class="languagesSelect")> 
                        ${options}
                        </select>`
    languageWrap.innerHTML = selectTag;
    elementToAppend.append(languageWrap);

    const select:HTMLSelectElement = languageWrap.querySelector('.languagesSelect')!;
   
    select.addEventListener('change', ()=>{
        setMainLanguage(select.value);
        elementToReLoad()
    })

    return languageWrap;
};