
const readyNew = () => {
    const mainDiv = document.getElementsByClassName('main')[0];
    const mainDivM = document.getElementsByClassName('mainM')[0];
    const centerLogo = document.getElementById('center-logo');
    const centerImg = document.getElementById('center-img');
    setTimeout(() => {
        centerLogo.style.animation = 'popup 0.8s forwards';
    }, 2000 );
    setTimeout(() => {
        centerLogo.style.display = 'none';
        centerImg.style.display = 'block';
        centerImg.style.animation = 'popin 0.8s forwards';
    }, 2700 );
    setTimeout(() => {
        centerLogo.style.display = 'block';
        centerLogo.style.animation = 'popin 0.8s forwards';
    }, 3200 );
    setTimeout(() => {
        centerLogo.style.animation = 'moveToTopLeft 1s forwards';
    }, 4000);
    setTimeout(() => {
        centerImg.style.animation = 'moveRight 0.8s forwards';
        centerImg.style.width = '40%';
        centerImg.style.padding = '20px';
        centerImg.style.justifyContent = 'center';
        centerImg.style.alignItems = 'center';
        centerImg.style.background = "url('/assets/blog1.png')";
        centerImg.style.backgroundRepeat = 'no-repeat';
        centerImg.style.backgroundSize = 'cover';
    }, 4000);
    setTimeout(() => {
        mainDivM.style.display = 'none'
        mainDiv.style.display = 'flex';
    }, 4800);
}

document.addEventListener("DOMContentLoaded", function(e) {
    readyNew();
});

function endLoad() {
    const mainDiv = document.getElementsByClassName('main')[0];
    const mainDivM = document.getElementsByClassName('mainM')[0];
    const centerLogo = document.getElementById('center-logo');
    const centerImg = document.getElementById('center-img');

    mainDivM.style.display = 'flex'
    mainDiv.style.display = 'none';

    setTimeout(() => {
        centerLogo.style.animation = 'moveToCenter 1s forwards';
    }, 1000);

    setTimeout(() => {
        centerImg.style.animation = 'moveRight 0.8s reverse forwards';
        centerImg.style.width = '100%';
        centerImg.style.height = '100%';
        centerImg.style.margin = 'auto';
        centerImg.style.borderRadius = '20px';
        // centerImg.style.display = 'none';
        centerImg.style.position = 'relative';
    }, 1000);

    setTimeout(() => {
        centerLogo.style.display = 'none';
        centerLogo.style.animation = 'popup 0.8s reverse forwards';
    }, 2000 );

    setTimeout(() => {
        centerLogo.style.display = 'block';
        centerImg.style.display = 'none';
        centerImg.style.animation = 'popup 0.8s reverse forwards';
    }, 2000 );

    setTimeout(() => {
        centerLogo.style.animation = 'popin 0.8s reverse forwards';
    }, 2700 );

    setTimeout(() => {
        location.reload();
    }, 3000);

}



const onlineIDInput = document.getElementById('onlineID');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

function updateButtonColor() {
    if (onlineIDInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
        loginButton.classList.add('active'); 
        loginButton.disabled = false;  
    } else {
        loginButton.classList.remove('active'); 
        loginButton.disabled = true;   
    }
}

onlineIDInput.addEventListener('input', updateButtonColor);
passwordInput.addEventListener('input', updateButtonColor);

document.getElementById('enroll').addEventListener('click', function() {
    const popup = document.getElementById('popuptext'); 
    popup.classList.toggle('show');
});

document.getElementById('loginButton').addEventListener('click', function() {
    const loadingButton = document.querySelector('.loading-button');
    const form = document.getElementById('loginForm');

    this.style.display = 'none';
    loadingButton.style.display = 'block';
    loadingButton.classList.add('loading');

    setTimeout(function() {
        endLoad();
        // form.submit(); 
    }, 3000);
});


