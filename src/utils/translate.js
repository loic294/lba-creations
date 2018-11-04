
let lang = 'fr'

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