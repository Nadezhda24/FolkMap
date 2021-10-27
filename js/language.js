const langs =[
    'ru','en'
]
let currLang='ru';
localStorage.setItem('language',currLang);

document.addEventListener('DOMContentLoaded', ()=>{
    let cLang= localStorage.getItem('language');
    if(cLang!== null){
        currLang=cLang;
    }
});

function Button(lang) {
    return `<button class="btn" value="${lang}">${lang}</button>`;
}

function LangBlock() {
    return `<div class="langs_block">
            ${langs.map(Button).join('')}
</div>`;
}

$('header')[0].innerHTML= LangBlock();
$('header>div>button[value="ru"]')[0].className+=' active';