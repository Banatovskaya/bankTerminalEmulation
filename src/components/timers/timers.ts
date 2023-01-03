import './timers.scss';

export  enum formatOfDate {'HH:MM', 'DD month YYYY', 'HH:MM week/dd.mm.yy' }

export function addTimer(elementToAppend : HTMLElement, format : formatOfDate): void {
    
    let divElement: HTMLElement = document.createElement('div');

    function addZero(num: number): string{
        if (num < 10){
            return '0' + num;
        } else return num.toString()
    }

    function showTime(): void {
        enum monthTextFormat {'січня','лютого','березня','квітня','травня','червня','липня','серпня','вересня','жовтня','листопада','грудня'}
        enum DaysOfWeek {'нд','пн','вт','ср','чт','пт','сб'};
        let time: Date;      
        time = new Date();
        const HH = time.getHours();
        const MM = time.getMinutes();
        const SS = time.getSeconds()
        const YYYY = time.getFullYear();
        const monthData = time.getMonth();
        const month = monthTextFormat[monthData];
        const DD = time.getDate();
        const dayOfWeek = time.getDay();

        switch (format) {
            case formatOfDate["DD month YYYY"]:
                divElement.innerHTML = `${addZero(DD)} ${month} ${YYYY}`
                divElement.classList.add('time-date');
            break;
            case formatOfDate["HH:MM"]:
                divElement.innerHTML = `${addZero(HH)}:${addZero(MM)}:${addZero(SS)}`
                divElement.classList.add('time-clock');
            break;
            case formatOfDate["HH:MM week/dd.mm.yy"]:
                divElement.innerHTML = '';
                let divTimeElement: HTMLElement = document.createElement('div');
                divTimeElement.classList.add('time-fullDate__clock');
                let divDateElement: HTMLElement = document.createElement('div');
                divDateElement.classList.add('time-fullDate__date');
                let divWeekElement: HTMLElement = document.createElement('div');   
                divWeekElement.classList.add('time-fullDate__week');
                divTimeElement.innerHTML = `${addZero(HH)}:${addZero(MM)}`
                divWeekElement.innerHTML = `${DaysOfWeek[dayOfWeek]}`
                divDateElement.innerHTML = `${addZero(DD)}.${addZero(monthData+1)}.${YYYY}`
                divElement.append(divTimeElement, divWeekElement, divDateElement)
                divElement.classList.add('time-fullDate');
            break;
        }
        
    }
    showTime();
    if(format === formatOfDate['HH:MM']|| format === formatOfDate['HH:MM week/dd.mm.yy']){
        setInterval(showTime,1000);
    } 

    if(format === formatOfDate['DD month YYYY']){
        setInterval(showTime,60000);
    } 
    
    elementToAppend.append(divElement)
}

