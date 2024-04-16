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
        case: {
            en: 'Country-by-Country Cases',
            zh: '国别案例',
        }
    }
    return dict
}
function getJsLanguage() {
    return 'en'
}

export const COUNTRY_BY_COUNTRY_LAWS = 10
export const COUNTRY_BY_COUNTRY_CASES = 14
export const reportTypeNameMap: { [key: number]: string } = {
    [COUNTRY_BY_COUNTRY_LAWS]: getJsDictionary()['3'][getJsLanguage()],
    [COUNTRY_BY_COUNTRY_CASES]: (() => {
        console.log('>>>>>>>> reportTypeIdConst.js >>>>>>>>> getJsDictionary() >>>>>>>>>', getJsDictionary())
        if (getJsDictionary().case
            && typeof getJsDictionary().case === 'object'
            && getJsDictionary().case[getJsLanguage()])
            return getJsDictionary().case[getJsLanguage()]

        else
            return  '国别案例'
    })(),
}