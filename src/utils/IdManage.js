export function getIdByUrl (url) {
    if (url) {
        const urlStart = 'https://pokeapi.co/api/v2/';
        const id = (url).replace(urlStart, '').match(/\d+/)[0];
        return id;
    }
}

export function fixedId (id) {
    if (id) {
        if (((id).toString()).length > 3 && id[0] !== '0') {
            return id;
        }
        return ('000'+id).slice(-3);
    }
    return '';
}