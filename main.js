//Blinking Text
let t = 0;
let adjectiveText = () => {

    let adjectives = ['Web Developer', 'Introverted', 'Freelancer', 'Dedicated', 'Business Inquisitive', 'Assertive', 'Finance Enthusiast', 'Leading'];

    document.querySelector('#blinktext').innerHTML = adjectives[t];

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
let resumeModal = document.querySelector('#resume-modal');
let resumeIcon = document.querySelector('#resume-icon');
let modalContent = document.querySelector('#resume');
let captionText = document.querySelector('#resumeCaption');

resumeIcon.onclick = () => {
    resumeModal.style.display = "block";
    modalContent.src = 'assets/Resume.pdf';
    captionText.innerHTML = 'My Resume';
}

let close = document.querySelector('#close');

close.onclick = () => {
    resumeModal.style.display = 'none';
}

//Show portfolio
let portfolioIcon = document.querySelector('#portfolio-icon');
let portfolioContainer = document.querySelector('#portfolio-container');
let isShowing = false;

portfolioIcon.onclick = () => {
    isShowing = true;
    isShowing == true ? portfolioContainer.style.display = 'flex' : portfolioContainer.style.display = 'none';
}

//Back to top button
let floatingIcons = document.querySelector('.floatingIcons');
let back2Top = document.querySelector('#toTop');

let scrollFunc = () => {
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? floatingIcons.style.display = "block" : floatingIcons.style.display = "none";
}

window.onscroll = () => scrollFunc();

back2Top.onclick = () => {
    isShowing = false;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    setTimeout(() => {
        isShowing == true ? portfolioContainer.style.display = 'flex' : portfolioContainer.style.display = 'none';
    }, 500)
}


//Dark Mode Toggle
let darkModeToggle = document.querySelector('#darkModeToggle');
let modeIcon = document.querySelector('#modeIcon');
let isEnabled = false;

let bodyColor = document.querySelector('body').style.backgroundColor;
let aboutSkillsContainerColor = document.querySelector('.about-skills-container').style.backgroundColor;
let portfolioContainerColor = document.querySelector('#portfolio-container').style.backgroundColor;
let nameColor = document.querySelector('.name').style.backgroundColor;

bodyColor = '#E8D7F1';
aboutSkillsContainerColor = 'thistle';
portfolioContainerColor = 'thistle';
nameColor = '#4F359B';

let toggleMode = () => {

    if(isEnabled == true){
        modeIcon.className = 'fas fa-moon'
        bodyColor = '#7F5A83';
        aboutSkillsContainerColor = '#2C0735';
        portfolioContainerColor = '#2C0735';
        nameColor = '#000000';
    } else{
        modeIcon.className = 'fas fa-sun';
        bodyColor = '#E8D7F1';
        aboutSkillsContainerColor = 'thistle';
        portfolioContainerColor = 'thistle';
        nameColor = '#4F359B';
    }
}

darkModeToggle.onclick = () => {
    isEnabled = !isEnabled;

    document.querySelector('body').style.backgroundColor = 'black';

    console.log(isEnabled);
}
