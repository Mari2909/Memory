
let wordsJSON = `[
    {"id":"1","english":"memory","transcription":"[ˈmemərɪ]","russian":"память","tags":"человек"},
    {"id":"2","english":"orca","transcription":"[ ôrkə]","russian":"косатка","tags":"животные"},
    {"id":"3","english":"now","transcription":"[ ’nɑu ]","russian":"сейчас","tags":"время"},
    {"id":"4","english":"paper","transcription":"[ ’peipə ]","russian":"бумага","tags":"предмет"},
    {"id":"5","english":"pilot","transcription":"[ ’pɑilət ]","russian":"пилот","tags":"профессии"},
    {"id":"6","english":"roof","transcription":"[ ru:f ]","russian":"крыша","tags":"город"},
    {"id":"7","english":"school","transcription":"[ sku:l ]","russian":"школа", "tags":"система образования"}
    ]
    `;

let words = JSON.parse(wordsJSON);
export default words;