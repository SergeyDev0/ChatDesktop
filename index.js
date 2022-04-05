let k = 0;
let l = 0;

let btnSettings = document.querySelector('.settings-open');
let settingsModal = document.querySelector('.modal-settings');
let closeSettings = document.querySelector('.modal-settings__close');
btnSettings.addEventListener('click', function(){
    settingsModal.classList.remove('hide');
    dropdown.classList.add('none')
})
closeSettings.addEventListener('click', function(){
    settingsModal.classList.add('hide');
})

// dropdown settings

let dropdownOpen = document.querySelector('.settings');
let dropdown = document.querySelector('.settings__dropdown');
dropdownOpen.addEventListener('click', function(){
    k = 0;
    $(dropdown).toggleClass('none');
    l = 1;
})
dropdown.addEventListener('click', function(){
    k = 0;
    l = 1;
})
function hide(){
    if (k == 1) {
        dropdown.classList.add('none')
        k -= 1;
        l -= 1;
    }
    if (l == 1){
        k += 1;
    }
    else if (l !== 1){
        k = 0;
    }
}

// checkbox
var bodyr = document.getElementById('body');
let nightMode = document.querySelector('.wrapper-checkbox');
let nightContent = document.querySelector('.content');
let buttonTrue = 0;
let buttonFalse = 0;
nightMode.addEventListener('click', function(){
    buttonTrue++;
    if (buttonTrue % 2){
        $(bodyr).toggleClass('night');
        $(nightContent).toggleClass('content-night');
        $(document.querySelector('.nav__notifications-img')).toggleClass('notifications-night');
        $(document.querySelector('.menu')).toggleClass('menu-night');
        $(document.querySelector('.nav__search')).toggleClass('nav__search-night');
        $(document.querySelector('.content__input')).toggleClass('content__bar-night');
        $(document.querySelector('.media-img')).toggleClass('media-night');
        $(document.querySelector('.media-img')).toggleClass('record-night');
        $(document.querySelector('.record-img')).toggleClass('record-night');
        $(document.querySelector('.smiles')).toggleClass('smiles-night');
        $(document.querySelector('.input-bar__input')).toggleClass('input-bar__input-night');
        $(document.querySelector('.modal-settings__close-icon')).toggleClass('modal-settings__close-icon-night');
        $(document.querySelector('.modal-settings')).toggleClass('modal-settings-night');
        $(document.querySelector('.profile')).toggleClass('profile-night');
        $(document.querySelector('.input-bar__media')).toggleClass('input-bar__media-night');
        $(document.querySelector('.input-bar__record')).toggleClass('input-bar__record-night');
        $(document.querySelector('.input-bar__smiles')).toggleClass('input-bar__smiles-night');
    }
})


// channels
channelsList = document.querySelectorAll('.channel-list__link');
let g = 1;
channelsList.forEach(m => {
    m.addEventListener('click', function(){
        m.classList.add('active');
        g = 0;
        channelsList.forEach(p => {
            if(g == 0){
                p.classList.remove('active');
                m.classList.add('active');
                setTimeout(() => {
                    g = 1;
                }, 100);
            }
        })
        console.log(g)
    })
})