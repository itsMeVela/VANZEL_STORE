
// hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

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


function openModalNetflix() {
    document.getElementById('netflix-modal').style.display = 'block';
}

function closeModalNetflix() {
    document.getElementById('netflix-modal').style.display = 'none';
}

let nameProduct = 'Spotify Premium';
let priceSpotify = 25000; // Harga per item
let quantitySpotify = 1; // Jumlah awal

function add() {
    quantitySpotify++;
    updateQuantity();
}

function subtract() {
    if (quantitySpotify > 1) {
        quantitySpotify--;
        updateQuantity();
    }
}

function updateQuantity() {
    document.getElementById('quantity').textContent = quantitySpotify;
    document.getElementById('total').textContent = 'Rp. ' + (priceSpotify * quantitySpotify).toLocaleString('id-ID');
}


let priceViu = 50000; // Harga per item
let quantityViu = 1; // Jumlah awal

function add2() {
    quantityViu++;
    updateQuantity2();
}

function subtract2() {
    if (quantityViu > 1) {
        quantityViu--;
        updateQuantity2();
    }
}

function updateQuantity2() {
    document.getElementById('quantity2').textContent = quantityViu;
    document.getElementById('total2').textContent = 'Rp. ' + (priceViu * quantityViu).toLocaleString('id-ID');
}

let priceYoutube = 30000; // Harga per item
let quantityYoutube = 1; // Jumlah awal

function add3() {
    quantityYoutube++;
    updateQuantity3();
}

function subtract3() {
    if (quantityYoutube > 1) {
        quantityYoutube--;
        updateQuantity3();
    }
}

function updateQuantity3() {
    document.getElementById('quantity3').textContent = quantityYoutube;
    document.getElementById('total3').textContent = 'Rp. ' + (priceYoutube * quantityYoutube).toLocaleString('id-ID');
}

let priceZoom = 20000; // Harga per item
let quantityZoom = 1; // Jumlah awal

function add4() {
    quantityZoom++;
    updateQuantity4();
}

function subtract4() {
    if (quantityZoom > 1) {
        quantityZoom--;
        updateQuantity4();
    }
}

function updateQuantity4() {
    document.getElementById('quantity4').textContent = quantityZoom;
    document.getElementById('total4').textContent = 'Rp. ' + (priceZoom * quantityZoom).toLocaleString('id-ID');
}

let priceCanva = 15000; // Harga per item
let quantityCanva = 1; // Jumlah awal

function add5() {
    quantityCanva++;
    updateQuantity5();
}

function subtract5() {
    if (quantityCanva > 1) {
        quantityCanva--;
        updateQuantity5();
    }
}

function updateQuantity5() {
    document.getElementById('quantity5').textContent = quantityCanva;
    document.getElementById('total5').textContent = 'Rp. ' + (priceCanva * quantityCanva).toLocaleString('id-ID');
}

let priceNetflix = 50000; // Harga per item

let quantityNetflix = 1; // Jumlah awal

function add6() {
    quantityNetflix++;
    updateQuantity6();
}

function subtract6() {
    if (quantityNetflix > 1) {
        quantityNetflix--;
        updateQuantity6();
    }
}

function updateQuantity6() {
    document.getElementById('quantity6').textContent = quantityNetflix;
    document.getElementById('total6').textContent = 'Rp. ' + (priceNetflix * quantityNetflix).toLocaleString('id-ID');
}

