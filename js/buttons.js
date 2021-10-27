import {themeLang} from './titles.js';


document.addEventListener('DOMContentLoaded', ()=>{
    let sLang= localStorage.getItem('language');
    if(sLang!== null){
        if( themeLang.currLang !== sLang)
            themeLang.currLang=sLang;
    }else{
        localStorage.setItem('language',themeLang.currLang);
    }
    themeLang.updateTitles();
});

function Button(lang) {
    return `<button class="btn" value="${lang}">${lang}</button>`;
}

function LangBlock() {
    return `<div class="langs_block">
            ${themeLang.langs.map(Button).join('')}
</div>`;
}

$('header')[0].innerHTML= LangBlock();
$('header>div>button[value="ru"]')[0].className+=' active';




$('.langs_block>button').on('click',(e)=>{
    let currBtn = e.currentTarget;
    $('header').find('.active').removeClass('active');
    currBtn.className += " active";

    themeLang.update();
    themeLang.updateTitles();
});