export const enum Pages {
    StartPage = 'startPage',
    MenuPage = 'menuPage',
    BankingServicesPage = 'BankingServicesPage',
    OtherServicesPage = 'OtherServicesPage',
    TopUpCardPage = 'TopUpCardPage' 
}

export interface ClientData{
    readonly id: string
    hash: string
    name: string
    cashBalance: number
}

export interface AccessWithData{
    access: boolean
    data: ClientData
}