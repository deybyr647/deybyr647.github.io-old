//Blinking Text
let t = 0;
let adjectiveText = () => {
    
    let adjectives = ['Web Developer', 'Introverted', 'Freelancer', 'Dedicated', 'Assertive', 'Business/Finance Enthusiast']

    document.getElementById('blinktext').innerHTML = adjectives[t];

    t++;

    t > adjectives.length - 1 ? t = 0 : t = t;
}

window.onload = () => {
    adjectiveText();

    setInterval(() =>{
        adjectiveText();
    }, 2500)
}

//Resume Modal
let resumeModal = document.getElementById('resume-modal');
let resumeIcon = document.getElementById('resume-icon');
let modalContent = document.getElementById('resume');
let captionText = document.getElementById('resumeCaption');

resumeIcon.onclick = () => {
    resumeModal.style.display = "block";
    modalContent.src = 'assets/Resume.pdf';
    captionText.innerHTML = 'My Resume';
}

let close = document.getElementById('close');

close.onclick = () => {
    resumeModal.style.display = 'none';
}

//Show portfolio
let portfolioIcon = document.getElementById('portfolio-icon');
let portfolioContainer = document.getElementById('portfolio-container');
let isShowing = false;

portfolioIcon.onclick = () => {
    isShowing = !isShowing;
    isShowing == true ? portfolioContainer.style.display = 'flex' : portfolioContainer.style.display = 'none';
}

//Back to top button
let back2Top = document.getElementById('toTop');

let scrollFunc = () => {
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? back2Top.style.display = "block" : back2Top.style.display = "none";
}

window.onscroll = () => {
    scrollFunc();
}

back2Top.onclick = () => {
    isShowing = !isShowing;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    setTimeout(() => {
        isShowing == true ? portfolioContainer.style.display = 'flex' : portfolioContainer.style.display = 'none';
    }, 500)
}