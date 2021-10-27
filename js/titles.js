
export let themeLang={
    currLang:'ru',
    langs:['ru','en'],
    ru:{
        "title": "Народное творчество Орловской области",
        "greeting": "Привет",
        "content": "f",
        "regions":"Районы Орловской области",
        "info_tab":"Общая информация",
        "history_tab":"История",
        "today_tab":"Наши дни",
        "video_tab":"Видео"
    },
    en:{
        "title": "Orel Folk Art",
        "greeting": "Hello",
        "content": "f",
        "regions":"Districts of the Orel region",
        "info_tab":"Information",
        "history_tab":"History",
        "today_tab":"Today",
        "video_tab":"Video"
    },
    update:function(){
        this.currLang = $('.langs_block>.active')[0].value;
        localStorage.setItem('language',this.currLang);
    },
    getAllText:function () {
        if(this.currLang === this.langs[0]){
            return this.ru;
        }else{
            return this.en;
        }
    },
    updateTitles:function () {
        let curText = this.getAllText();
        $('#main_title')[0].innerHTML = `<span>${curText.title}</span>`;
        $('#title_reg')[0].innerHTML = `<span>${curText.regions}</span>`;
        $('#r_reg')[0].innerHTML = `<span>${curText.regions}</span>`;

        $('#info_tab')[0].innerHTML = `<span>${curText.info_tab}</span>`;
        $('#history_tab')[0].innerHTML = `<span>${curText.history_tab}</span>`;
        $('#today_tab')[0].innerHTML = `<span>${curText.today_tab}</span>`;
        $('#video_tab')[0].innerHTML = `<span>${curText.video_tab}</span>`;

    }

}