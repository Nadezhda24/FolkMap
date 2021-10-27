import {themeLang} from './titles.js';
import {artTab} from './infoTabs.js';
document.addEventListener('DOMContentLoaded',   ()=>{
    let texts = themeLang.getAllText();
    getDistricts();
});

const standStyle = `fill:#B5E2FF;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill;`;
const chosenStyle = `fill: #79CAFF; stroke:#000000;stroke-width: 3px;`;

function getDistricts() {

      $.ajax({
        type: 'POST',
        url: 'db/db_districts.php',
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

function DistContent(tab) {
    // echo "<li class='list-group-item'  data-id='#reg".$distict['id']."'><a class='reg' href='#reg".$distict['id']."'style='text-decoration: none;' id='reg".$distict['id']."'>".$distict[$curr_lang]."</a></li>";
    let HTMLin=[];
    tab.forEach( (el) =>{
        HTMLin+=`<li href='#reg${el.id}' class="list-group-item">${el.name}</li>`
    })
    return HTMLin;
}

function addListenerRegionsList() {
    $('#regions>.list-group>li')
        .on('mouseenter',(e)=>{

            let self = e.currentTarget;

            let selfClass = self.getAttribute('href');
            let currentElement = document.querySelector(`.map a[href="${selfClass}"]`);
            self.classList.add('list-group-item-active');

            let currentPath = currentElement.querySelectorAll('path');
            if (currentPath) currentPath.forEach(el => el.style.cssText = chosenStyle);
        })
        .on('mouseleave',(e)=>{
            let self = e.currentTarget;

            let selfClass = self.getAttribute('href');
            let currentElement = document.querySelector(`.map a[href="${selfClass}"]`);
            self.classList.remove('list-group-item-active');
            let currentPath = currentElement.querySelectorAll('path');
            if (currentPath) currentPath.forEach(el => el.style.cssText = standStyle);

        })
        .on('click',(e)=>{
            let self = e.currentTarget;

            let selfClass = self.getAttribute('href');
            let id_dist = selfClass.replace(/[^0-9]/g, '');

            $('#regions')[0].style.display='none';
            $('#cards')[0].style.display='block';
            artTab.getTabByDistrict(id_dist);

        });
}

$('#r_reg').on('click',()=>{
    $('#regions')[0].style.display='block';
    $('#cards')[0].style.display='none';
});

$('.langs_block>button').on('click',(e)=>{
    let currBtn = e.currentTarget;
    $('header').find('.active').removeClass('active');
    currBtn.className += " active";

    themeLang.update();
    themeLang.updateTitles();
    getDistricts();
});
