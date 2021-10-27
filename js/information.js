import {themeLang} from './titles.js';


function getFolk() {

    $.ajax({
        type: 'POST',
        url: 'db/db_information.php',
        data: {lang:themeLang.currLang},
        dataType: 'json',
        success: function (data) {
            $('#regions>.list-group')[0].innerHTML=DistContent(data);
            addListenerRegionsList();
        },error:(err)=>{
            console.log(err);
        }
    });
}

