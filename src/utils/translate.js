
let lang = 'fr'

const ls = typeof localStorage === "undefined" ?
    {
        getItem: () => "fr",
        setItem: () => null
    } :
    localStorage

if (typeof navigator !== "undefined" && navigator.language)
    lang = navigator.language

if (ls.getItem('lang')) {
    lang = ls.getItem('lang')
} else {
    ls.setItem('lang', lang)
}


export const t = (fr, en) => {
    const l = {
        fr,
        en
    }
    return l[lang] || l['fr']
}

export const getLang = () => lang

export const updateLang = (langue) => {
    lang = langue
    ls.setItem('lang', langue) 
}