import {themeLang} from "./titles.js";
import {artTab} from "./infoTabs.js";

const $mapLinks = document.querySelectorAll('.map a');

let clickOn = false;
let $currentRegView = '';
let $currentRegId = -1;
let $currentRegElement;

const svg = document.getElementById('svg_main');
const viewB = svg.getAttribute('viewBox');
let temp_main_links = "/";

//стили для карты
const standStyle = `fill:#B5E2FF;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill;`;
const chosenStyle = `fill: #79CAFF; stroke:#000000;stroke-width: 3px;`;


//отобразить лишь один регион по его className
function showRegion(currentPath, className, targetBounding,title) {

    $('#regions')[0].style.display='none';
    $('#cards')[0].style.display='block';
    //$('#card_title')[0].textContent=e.target.firstChild.textContent;


    console.log(currentPath);
    console.log(className);
    console.log(targetBounding);
    //изменение отображения карты
    let allPath = document.querySelectorAll('path');
    if (targetBounding) {
        let viewXY = targetBounding.x - 5 + ' ' + (targetBounding.y - 10) + ' ' + (targetBounding.width + 10) + ' ' + (targetBounding.height + 20);
        svg.setAttribute('viewBox', viewXY);
    }

    svg.style.transformOrigin = "50% 20%";
    svg.setAttribute('transform', 'scale(0.9)');
    svg.setAttribute('border', '4px silid black');
    allPath.forEach(function (item, i, allPath) {
        if (item.id !== currentPath.id) item.setAttribute('visibility', 'hidden');
    });
    //сохранение данных для динамически создаваемых узлов
    $currentRegView = targetBounding;
    $currentRegId = className.replace(/[^0-9]/g, '');
    $currentRegElement = currentElement;
}

// для всех участков карты отбработка событий: mouseenter, mouseleave, click
$mapLinks.forEach(el => {

    el.addEventListener('mouseenter', (e) => {

        let self = e.currentTarget;
        let selfClass = self.getAttribute('href');

        let currentPath = self.querySelectorAll('path');
        if (currentPath) currentPath.forEach(el => el.style.cssText = chosenStyle);

        let currentElement = document.querySelector(`li[href="${selfClass}"]`);
        if(currentElement) currentElement.classList.add('list-group-item-active');

    });

    el.addEventListener('mouseleave', (e) => {

        let self = e.currentTarget;
        let selfClass = self.getAttribute('href');

        let currentPath = self.querySelectorAll('path');
        if (currentPath) currentPath.forEach(el => el.style.cssText = standStyle);

        let currentElement = document.querySelector(`li[href="${selfClass}"]`);
        if(currentElement) currentElement.classList.remove('list-group-item-active');

    });

    el.addEventListener('click', (e) => {

        clickOn = !clickOn;

        let self = e.currentTarget;
        let selfClass = self.getAttribute('href');
        let currentPath = self.querySelector('path');
        let targetBounding = self.getBBox();
        //получение id района
        let id_dist = selfClass.replace(/[^0-9]/g, '');
        getArtByDistrict(id_dist);



        // if (clickOn) {
        //     // showRegion(currentPath, selfClass, targetBounding);
        //
        // } else {
        //     showMap();
        //     document.location.replace(temp_main_links);
        // }

    });
});

//для всех элементов списка регионов отбработка событий: mouseenter, mouseleave, click
// $('#regions>.list-group>li').forEach(el => {
//
//     el.addEventListener('click', (e) => {
//         clickOn = !clickOn;
//
//         $('#regions')[0].style.display='none';
//         $('#cards')[0].style.display='block';
//         $('#card_title')[0].textContent=e.target.firstChild.textContent;
//
//         let self = e.currentTarget;
//         let selfLink = self.querySelector('a');
//         let selfClass = selfLink.getAttribute('href');
//
//         // отображение региона на карте
//         let currentElement = document.querySelector(`.map a[href="${selfClass}"]`);
//         let currentPath = currentElement.querySelector('path');
//         let newBox = currentElement.getBBox();
//
//         showRegion(currentPath, selfClass, newBox);
//
//     });
// });




//показать всю карту
function showMap() {

    svgSchools.removeEventListener('mousemove', moved);
    let allPath = document.querySelectorAll('path');
    allPath.forEach(function (item, i, allPath) {
        item.setAttribute('visibility', 'visible');
    });
    svg.setAttribute('viewBox', viewB);
    svg.setAttribute('transform', 'scale(1)');

    $currentRegView = '';
    $currentRegId = -1;
    $currentRegElement = '';
}

function getArtByDistrict($idDistrict) {
    $('#regions')[0].style.display='none';
    $('#cards')[0].style.display='block';

    artTab.getTabByDistrict($idDistrict);

    // $.ajax({
    //     type: 'POST',
    //     url: 'db/db_art.php',
    //     data: {lang:themeLang.currLang,idDistrict:$idDistrict},
    //     dataType: 'json',
    //     success: function (data,status) {
    //         console.log(data[0]);
    //     },error:(err)=>{
    //         console.log(err);
    //     }
    // });
}