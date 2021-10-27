import {themeLang} from "./titles.js";

export let artTab={
    id:'-1',
    name:"None",
    info:"None",
    history:"None",
    today:"None",
    video:"/",
    idDist:0,
    getTabByDistrict: async function ($idDistrict) {
        await $.ajax({
            type: 'POST',
            url: 'db/db_art.php',
            data: {lang:themeLang.currLang,idDistrict:$idDistrict},
            dataType: 'json',
            success: function (data,status) {

                if(data.length!==0){
                    this.id = data[0].id;
                    this.name = data[0].name;
                    this.info = data[0].info;
                    this.history = data[0].history;
                    this.today = data[0].today;
                    this.video = data[0].video;
                }
                $('#card_title')[0].textContent=this.name;
                $('#info>.card-body>.card-text')[0].textContent = this.info;
                $('#history>.card-body>.card-text')[0].textContent = this.history;
                $('#today>.card-body>.card-text')[0].textContent = this.today;
                $('#video>div>iframe')[0].setAttribute('src',this.video);
                if(!(this.id)) this.id='-1';
                setPictures(this.id);
            },error:(err)=>{
                console.log(err);
            }
        })

    }

}

function setPictures($id) {

    if ($id !== '-1') {
         $.ajax({
            type: 'POST',
            url: 'db/db_picture_art.php',
            data: {id_art: $id},
            dataType: 'json',
            success: function (data, status) {
                console.log(data);
                if (data.length !== 0) {
                    $('#info>.card-img-top')[0].setAttribute('src', ('/img/' + data[0].info));
                    $('#history>.card-img-top')[0].setAttribute('src', ('/img/' + data[0].history));
                    $('#today>.card-img-top')[0].setAttribute('src', ('/img/' + data[0].today));
                }
            }, error: (err) => {
                console.log(err);
            }
        })

    } else {
        $('#info>.card-img-top')[0].setAttribute('src', ('/img/notfound.gif'));
        $('#history>.card-img-top')[0].setAttribute('src', ('/img/notfound.gif'));
        $('#today>.card-img-top')[0].setAttribute('src', ('/img/notfound.gif'));
        $('#video>div>iframe')[0].setAttribute('src','/img/notfound.gif');
    }

}