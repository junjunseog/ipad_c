import ipads from '../data/ipads.js'
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

// 요소의 가시성 관찰 //
const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
            return
        }
        entry.target.classList.add('show')
    })
})

const infoEls = document.querySelectorAll('.info')
infoEls.forEach(function (el) {
    io.observe(el)
})

//비디오 재생 ! //
const video = document.querySelector('.stage video')
const playBtn = document.querySelector('.stage .controller--play')
const pauseBtn = document.querySelector('.stage .controller--pause')

playBtn.addEventListener('click', function() {
    video.play()
    playBtn.classList.add('hide')
    pauseBtn.classList.remove('hide')
})

pauseBtn.addEventListener('click', function() {
    video.pause()
    playBtn.classList.remove('hide')
    pauseBtn.classList.add('hide')
})

// 당신에게 맞는 iPad는 ?

const itemsEl = document.querySelector('section.compare .items')
ipads.forEach(function(ipad) {
    const itemEl = document.createElement('div')
    itemEl.classList.add('item')

    let colorList = ''
    ipad.colors.forEach(function (color) {
        colorList += `<li style="background-color: ${color};"></li>`
    })

    itemEl.innerHTML = /* html */ `
    <div class="thumbnail">
        <img src="${ipad.thumbnail}" alt="${ipad.name}">
    </div>
    <ul class="colors">
    ${colorList}
    </ul>
    <h3 class="name">${ipad.name}</h3>
    <p class="tagline">${ipad.tagline}</p>
    <p class="price">₩${ipad.price.toLocaleString('en-US')}부터</p> 
    <a href="./purchase.html"><button class="btn">구입하기</button></a>
    <a href="${ipad.url}" class="link">더 알아보기</a>   
    `

    itemsEl.append(itemEl)
})


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


const thisYearEl = document.querySelector('span.this-year')
thisYearEl.textContent = new Date().getFullYear()


const mapEls = document.querySelectorAll('footer .navigations .map')
mapEls.forEach(function (el) {
    const h3El = el.querySelector('h3')
    h3El.addEventListener('click', function() {
        el.classList.toggle('active')
    })
})