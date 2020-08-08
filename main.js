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

let toggleMode = () => {
    let body = document.querySelector('body');
    let aboutSkillsContainer = document.querySelector('.about-skills-container');
    let portfolioContainer = document.querySelector('#portfolio-container');
    let skills = document.querySelector('.skills');
    let about = document.querySelector('.about');
    let portfolio = document.querySelector('.portfolio');
    let name = document.querySelector('.name');
    let project = document.querySelectorAll('.project');

    if(isEnabled == true){
        modeIcon.className = 'fas fa-moon'
        body.style.backgroundColor = '#7F5A83';
        aboutSkillsContainer.style.backgroundColor = '#2C0735';
        portfolioContainer.style.backgroundColor = '#2C0735';
        about.style.backgroundColor = '#8d808f';
        skills.style.backgroundColor = '#8d808f';
        portfolio.style.backgroundColor = '#8d808f';
        project.forEach(p => p.style.backgroundColor = '#cdcdcd');
        name.style.color = '#A188A6';

    } else{
        modeIcon.className = 'fas fa-sun';
        body.style.backgroundColor = '#E8D7F1';
        aboutSkillsContainer.style.backgroundColor = 'thistle';
        portfolioContainer.style.backgroundColor = 'thistle';
        about.style.backgroundColor = '#F1E4F3';
        skills.style.backgroundColor = '#F1E4F3';
        portfolio.style.backgroundColor = '#F1E4F3';
        project.forEach(p => p.style.backgroundColor = 'white');
        name.style.color = '#4F359B';
    }
}

darkModeToggle.onclick = () => {
    isEnabled = !isEnabled;
    toggleMode();
}
