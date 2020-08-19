let backToHome = document.querySelector('a');
let icon = document.querySelector('i');

backToHome.onmouseover = () => {
  icon.style.color = '#ccc';
}

backToHome.onmouseout = () => {
  icon.style.color = 'white';
}
