
let lang = 'fr'

if (typeof localStorage === "undefined")
    localStorage = {
        getItem: () => "fr",
        setItem: () => null
    }

if (typeof navigator !== "undefined" && navigator.language)
    lang = navigator.language

if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang')
} else {
    localStorage.setItem('lang', lang)
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
    localStorage.setItem('lang', langue) 
}