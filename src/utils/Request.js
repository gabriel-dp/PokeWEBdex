import { useState, useEffect } from 'react';

async function fetchAsync (url) {
    return await (await fetch(url)).json();
}

function Request (urlAPI) {
    const [dataAPI, setDataAPI] = useState({});
    useEffect(() => {
        fetchAsync(urlAPI).then(response => {
            setDataAPI(response);
        });
    }, [urlAPI, setDataAPI]);

    return [dataAPI, setDataAPI];
}

export default Request;