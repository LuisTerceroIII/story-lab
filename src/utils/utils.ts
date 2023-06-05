export function emailNormalize(email: string): string {
    return email?.trim()?.replace(/ /g, "")?.toLowerCase()
}
/**
 * Normalize a spanish string for query (makes lowercase and replaces accents with non accents)
 * @param str 
 */
export function normalizeStr(str: string): string {
    const strReplace = {
        "á":"a", "à":"a", "â":"a",
        "é":"e", "è":"e", "ê":"e",
        "í":"i", "ì":"i", "î":"i",
        "ó":"o", "ò":"o", "ô":"o", "ö":"o",
        "ú":"u", "ù":"u", "û":"u", "ü":"u", 
        "ñ":"n", "ç":"c", "č":"c"
    }
    const regex = new RegExp(Object.keys(strReplace).join("|"),"ig");
    return str.toLocaleLowerCase().replace(regex, char => strReplace[char]).replace(/[^0-9a-z ]/gi, "")
}

export const validateEmail = (email: string) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
