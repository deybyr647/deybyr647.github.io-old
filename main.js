let i = 0;

let adjectiveText = () => {
    
    let adjectives = ['Web Developer', 'Insomniac', 'Musicophile', 'Stubborn', 'Introverted']

    document.getElementById('blinktext').innerHTML = adjectives[i];

    i++;

    i >= adjectives.length - 1 ? i = 0 : i = i;
}

window.onload = () => {
    adjectiveText();
}

setInterval(() =>{
    adjectiveText();
}, 2000)