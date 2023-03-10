import navigations from '../data/navigations.js'


//장바구니
const basketStarterEl = document.querySelector('header .basket-starter');
const basketEl = basketStarterEl.querySelector('header .basket');

basketStarterEl.addEventListener('click', function(event) {
   event.stopImmediatePropagation()
    if (basketEl.classList.contains('show'))  {  //false & true
   hideBasket()//hide
} else {
    showBasket()//show
}
})
basketEl.addEventListener('click', function(event) {
    event.stopPropagation()
})

window.addEventListener('click', function() {
    hideBasket()
})

function showBasket () {
    basketEl.classList.add('show')
}
function hideBasket () {
    basketEl.classList.remove('show')
}

//검색

const headerEl = document.querySelector('header')
const headerMenuEls = [...headerEl.querySelectorAll('ul.menu > li')]//document.querySelectorAll('ul.menu > li')
const searchWrapEl = headerEl.querySelector('.search-wrap')
const searchStarterEl = headerEl.querySelector('.search-starter')
const searchCloserEl = searchWrapEl.querySelector('.search-closer')
const searchShadowEl = searchWrapEl.querySelector('.shadow')
const searchInputEl = searchWrapEl.querySelector('input')
const searchDelayEls = [...searchWrapEl.querySelectorAll('li')] //전개연산자 배열

searchStarterEl.addEventListener('click', showSearch)
searchCloserEl.addEventListener('click', function(event) {
    event.stopPropagation()
    hideSearch()
})
searchShadowEl.addEventListener('click', hideSearch)

function showSearch() {
    headerEl.classList.add('searching')
    stopScroll()//html최상위요소 'html//
    headerMenuEls.reverse().forEach(function(el, index) {
        el.style.transitionDelay = index * .4 / headerMenuEls.length + 's'//각 번호 * 0.4초 / 12 '초'
    })
    searchDelayEls.forEach(function (el, index) {
        el.style.transitionDelay = index * .4 / searchDelayEls.length + 's'
    })
    setTimeout(function() {
        searchInputEl.focus()
    }, 600)
}
function hideSearch() {
    headerEl.classList.remove('searching')
    playScroll()
    headerMenuEls.reverse().forEach(function(el, index) {
        el.style.transitionDelay = index * .4 / headerMenuEls.length + 's'//각 번호 * 0.4초 / 12 '초'
})
    searchDelayEls.reverse().forEach(function (el, index) {
        el.style.transitionDelay = index * .4 / searchDelayEls.length + 's'
    })
    searchDelayEls.reverse()
    searchInputEl.value = ''
}
function playScroll() {
    document.documentElement.classList.remove('fixed')
}
function stopScroll() {
    document.documentElement.classList.add('fixed')
}

//헤더 메뉴 토글
const menuStarterEl = document.querySelector('header .menu-starter')
menuStarterEl.addEventListener('click', function() {
    if (headerEl.classList.contains('menuing')) {
        headerEl.classList.remove('menuing')
        searchInputEl.value = ''
        playScroll()
    }   else {
    headerEl.classList.add('menuing')
        stopScroll()
    }
})

//헤더 검색 
const searchTextFieldEl = document.querySelector('header .textfield')
const searchCancelerEl = document.querySelector('header .search-canceler')
searchTextFieldEl.addEventListener('click', function() {
    headerEl.classList.add('searching--mobile')
    searchInputEl.focus()
})

searchCancelerEl.addEventListener('click', function () {
    headerEl.classList.remove('searching--mobile')
})

//
window.addEventListener('resize', function() {
    if (window.innerWidth <= 740) {
        headerEl.classList.remove('searching')
    }   else {
        headerEl.classListr.remove('searcing--mobile')
    }
})
//
const navEl = document.querySelector('nav')
const navMenuToggleEl = document.querySelector('.menu-toggler')
const navMenuShadowEl = document.querySelector('nav .shadow')

navMenuToggleEl.addEventListener('click', function(){
    if (navEl.classList.contains('menuing')) {
        hideNavMenu()
    }   else {
        showNavMenu()
    }
})
navEl.addEventListener('click', function(event) {
    event.stopPropagation()
})
window.addEventListener('click', hideNavMenu)
navMenuShadowEl.addEventListener('click', hideNavMenu)

function showNavMenu () {
    navEl.classList.add('menuing')
}
function hideNavMenu () {
    navEl.classList.remove('menuing')
}

const groupEl = document.querySelector('.as-buttongroup')
const btngroupEl = document.querySelector('.as-buttongroup-item')

btngroupEl.addEventListener('click', function() {
    if (btngroupEl.classList.contains('go')) {
        hideGoMenu()
    }   else {
        showGoMenu()
    }
})

function showGoMenu () {
    btngroupEl.classList.add('go')
}
function hideGoMenu () {
    btngroupEl.classList.remove('go')
}

const navigationsEl = document.querySelector('footer .navigations')
navigations.forEach(function(nav) {
    const mapEl = document.createElement('div')
    mapEl.classList.add('map')

    let mapList = ''
    nav.maps.forEach(function(map) {
        mapList += /*html*/`
        <li>
            <a href="${map.url}">${map.name}</a>
        </li>
        `
    })

    mapEl.innerHTML = /*html*/ `
    <h3>
        <span class="text">${nav.title}</span>
        <span class="icon">+</span>
    </h3>
    <ul>
        ${mapList}
    </ul>
    `

    navigationsEl.append(mapEl)
})




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