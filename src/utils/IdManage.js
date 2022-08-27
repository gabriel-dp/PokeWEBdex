export function getIdByUrl (url) {
    if (url) {
        const urlStart = 'https://pokeapi.co/api/v2/';
        const id = (url).replace(urlStart, '').match(/\d+/)[0];
        return id;
    }
}

export function fixedId (id) {
   return id ? ('000'+id).slice(-3) : '';
}