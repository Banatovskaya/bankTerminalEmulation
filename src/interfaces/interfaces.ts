export const enum Pages {
    StartPage = 'startPage',
    MenuPage = 'menuPage',
    BankingServicesPage = 'bankingServicesPage',
    OtherServicesPage = 'otherServicesPage',
    TopUpCardPage = 'topUpCardPage',
    TopUpMobilePhonePage = 'topUpMobilePhonePage',
    GetMoneyPage = 'getMoneyPage',
    CardBallancePage = 'cardBallancePage',
    ChangePinCodePage = 'changePinCodePage'
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