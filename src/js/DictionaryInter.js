interface Dictionary {
    [key: string]: {
        'en': string
        'zh': string
    }
}
function getJsDictionary() {
    const dict: Dictionary = {
        3: {
            en: 'Country-by-Country Laws',
            zh: '国别国法律',
        },
    }
    return dict
}
function getJsLanguage() {
    return 'en'
}

export const COUNTRY_BY_COUNTRY_LAWS = 10
export const reportTypeNameMap: { [key: number]: string } = {
    [COUNTRY_BY_COUNTRY_LAWS]: getJsDictionary()['3'][getJsLanguage()]
}
