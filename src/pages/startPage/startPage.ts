import './startPage.scss';
import img from '../../assets/images/putCard.jpg';
import { getHTMLElement } from '../../services/getElement';
import { Pages } from "../../interfaces/interfaces";
import menuPage from "../menuPage/menuPage";
import { addTimer, FormatOfDate} from '../../components/timers/timers';
import { addHeader } from '../../components/header/header';
import { addBigLogo } from '../../components/logo/logo';
import { addPinCode } from '../../components/pinCode/pinCode';
import { addFooter } from '../../components/footer/footes';
import { addCancelButton } from '../../components/buttons/cancelButton/cancelButton';
import { checkPin } from '../../services/checkPin';
import { addBigMessageComponent} from '../../components/bigMessage/bigMessage';
import { setClientData } from '../../services/data';
import { request } from '../../services/http';
import { addLanguagesPanel } from '../../components/languages/languages';
import { mainLanguage } from '../../services/mainLanguage';
import { Languages } from '../../services/mainLanguage';

async function startPage(): Promise<void> {

    const container = getHTMLElement('.container');
    container.innerHTML = '';

    //header
    const header = addHeader(container);  //if we need a variable for next manipulation
    addBigLogo(header); // in this case we don`t need a variable for next manipulation   
    addLanguagesPanel(header, startPage);

    //middle -> Page
    const page: HTMLElement = document.createElement('div');
    page.classList.add('page');
    page.classList.add(Pages.StartPage);
    page.id = Pages.StartPage;
    
    let pin = async(cardNumber:string) => {
        let data:string = (await request(cardNumber)).hash.slice(6);
        return data;
    }

    page.innerHTML = `  <div class="startPage__img-wrap">
                            <img class="startPage__img" src=${img} alt="img putCard">
                        </div> 
                        <div class='startPage__text-wrap'>
                            <div class='startPage__select'>
                                <h1 class='startPage__text'>${mainLanguage==Languages.Ukrainian?'Вставте картку':'Insert card'}</h1>
                                <select name="cards" class="selectCards">
                                    <option value="none" selected="selected" disabled="disabled">
                                    ${mainLanguage==Languages.Ukrainian?'виберіть картку':'select card'}</option>
                                    <option value="1111">PIN ${await pin('1111')}</option>
                                    <option value="2222">PIN ${await pin('2222')}</option>
                                    <option value="3333">PIN ${await pin('3333')}</option>
                                    <option value="4444">PIN ${await pin('4444')}</option>
                                </select>
                            </div> 
                        </div>`;
    container.append(page);   

    //footer
    const footer = addFooter(container);
    addTimer(footer, FormatOfDate['HH:MM week/dd.mm.yy']);

    //select 
    const startPageTextWrap: HTMLElement = page.querySelector('.startPage__text-wrap')!;
    const select:HTMLSelectElement = document.querySelector('.selectCards')!;
    select.addEventListener('change', ()=>{
        let effortNumbers = 3;
        startPageTextWrap.innerHTML = ``;
        addCancelButton(header);
        const cardId = select.value;

        async function getPinCode(){
            startPageTextWrap.innerHTML = ``;
            const pinCode = await addPinCode(startPageTextWrap);
            const accessWithData = await checkPin(cardId, pinCode)
            if(accessWithData.access){
                setClientData(accessWithData.data)
                menuPage();

            }  else {
                if (effortNumbers > 1){
                    effortNumbers = effortNumbers - 1;
                    addBigMessageComponent(container, `невірний пінкод залишилось спроб ${effortNumbers}` , getPinCode);
                } else {
                    addBigMessageComponent(container, "Картку вилучено" , startPage);
                }
            }
        }
        getPinCode(); 
    })

}

export default startPage