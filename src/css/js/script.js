//navbar-fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
} ) 

// klik di luar humburger
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
})

function openModalSpotify() {
    document.getElementById('spotify-modal').style.display = 'block';
}

function closeModalSpotify() {
    document.getElementById('spotify-modal').style.display = 'none';
}

function openModalViu() {
    document.getElementById('viu-modal').style.display = 'block';
}

function closeModalViu() {
    document.getElementById('viu-modal').style.display = 'none';
}

function openModalYoutube() {
    document.getElementById('youtube-modal').style.display = 'block';
}

function closeModalYoutube() {
    document.getElementById('youtube-modal').style.display = 'none';
}

function openModalZoom() {
    document.getElementById('zoom-modal').style.display = 'block';
}

function closeModalZoom() {
    document.getElementById('zoom-modal').style.display = 'none';
}

function openModalCanva() {
    document.getElementById('canva-modal').style.display = 'block';
}

function closeModalCanva() {
    document.getElementById('canva-modal').style.display = 'none';
}

function openModalVpn() {
    document.getElementById('vpn-modal').style.display = 'block';
}

function closeModalVpn() {
    document.getElementById('vpn-modal').style.display = 'none';
}