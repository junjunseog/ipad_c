/*=============== SHOW & HIDE MENU ===============*/
const toggleButtonEl = document.getElementById('floating-toggle');

const activeMenuEl = () => {
    toggleButtonEl.classList.toggle('active')
}

toggleButtonEl.addEventListener('click', activeMenuEl);


const adressEl = document.getElementById('adress')
const semiOneEl = document.querySelector('.semi-box1')

adressEl.addEventListener('click', function() {
    if (adressEl.classList.contains('change')) {
        hideImg ()
    }   else {
        showImg ()
    }
})
adressEl.addEventListener('click', function() {
    if (semiOneEl.classList.contains('bar1')) {
        hideAdress()
    }   else {
        showAdress()
    }
})


function showAdress () {
    semiOneEl.classList.add('bar1')
}
function hideAdress () {
    semiOneEl.classList.remove('bar1')
}
function showImg () {
    adressEl.classList.add('change')
}
function hideImg () {
    adressEl.classList.remove('change')
}

const totalAddEl = document.getElementById('totaladd')
const closeEl = document.getElementById('closeup')
const semiTwoEl = document.querySelector('.semi-box2')
const adressZeroEl = document.querySelector('.adress-0')
const adressFirstEl = document.querySelector('.adress-1')
const adressTwoEl = document.querySelector('.adress-2')
const adressThirdEl = document.querySelector('.adress-3')
const adressFourEl = document.querySelector('.star-1')

adressTwoEl.addEventListener('click', function() {
    adressZeroEl.classList.toggle('gone')
    adressFirstEl.classList.toggle('gone')
    adressFourEl.classList.toggle('gone')
    adressThirdEl.classList.toggle('gone')
})

totalAddEl.addEventListener('click', function() {
    if (adressTwoEl.classList.contains('visib')) {
        hideVisib ()
    }   else {
        showVisib ()
    }
})

function showVisib () {
    adressTwoEl.classList.add('visib')
}

function hideVisib () {
    adressTwoEl.classList.remove('visib')
}

closeEl.addEventListener('click', function() {
    if (semiTwoEl.classList.contains('bar2')) {
        hideClose()
    }   else {
        showClose()
    }
})

function showClose () {
    semiTwoEl.classList.add('bar2')
}
function hideClose () {
    semiTwoEl.classList.remove('bar2')
}