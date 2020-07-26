//Blinking Text
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

//Resume Modal

let resume_modal = document.getElementById('resumeModal');

let resume_icon = document.getElementById('resumeIcon');

let modal_image = document.getElementById('resume');

let captionText = document.getElementById('resumeCaption');

resume_icon.onclick = () => {
    resume_modal.style.display = "block";
    modal_image.src = 'assets/Resume.pdf';
    captionText.innerHTML = 'My Resume';

}

let close = document.getElementById('close');

close.onclick = () => {
    resume_modal.style.display = 'none';
}