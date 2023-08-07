export enum Languages {
    Ukrainian = 'UA',
    English = 'EN',
    // Slovak = 'SL'
}

export let mainLanguage: string  = Languages['Ukrainian'];

export function setMainLanguage(language:string) : void {
    mainLanguage = language;
}