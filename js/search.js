/*=============== SHOW & HIDE MENU ===============*/
const toggleButtonEl = document.getElementById('floating-toggle');

const activeMenuEl = () => {
    toggleButtonEl.classList.toggle('active')
}

toggleButtonEl.addEventListener('click', activeMenuEl);