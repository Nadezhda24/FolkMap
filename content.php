<?php
?>
<div class="region " id="regions" style="display: block;">
    <h4 id="title_reg" href="#regions"></h4>
    <div class="list-group">

    </div>
</div>


<div class="cards" id = "cards" style="display: none;">
    <p>
        <a id ="r_reg" style="color: #8ed1ff;text-decoration:underline "></a>
    </p>
    <h3 id="card_title" align=" center"></h3>

    <div class="list-group" id = "c_group">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active " id="info_tab" data-bs-toggle="tab" data-bs-target="#info" type="button" role="tab" aria-controls="info" aria-selected="true"></button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="history_tab" data-bs-toggle="tab" data-bs-target="#history" type="button" role="tab" aria-controls="history" aria-selected="false"></button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="today_tab" data-bs-toggle="tab" data-bs-target="#today" type="button" role="tab" aria-controls="today" aria-selected="false"></button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="video_tab" data-bs-toggle="tab" data-bs-target="#video" type="button" role="tab" aria-controls="video" aria-selected="false"></button>
            </li>
        </ul>

        <!-- Tab panes -->
        <div class="tab-content">
            <div class="tab-pane active" id="info" role="tabpanel" aria-labelledby="info_tab"><?php include("tabs/info.php"); ?></div>
            <div class="tab-pane" id="history" role="tabpanel" aria-labelledby="history_tab"><?php include("tabs/history.php"); ?></div>
            <div class="tab-pane" id="today" role="tabpanel" aria-labelledby="today_tab"><?php include("tabs/today.php"); ?></div>
            <div class="tab-pane" id="video" role="tabpanel" aria-labelledby="video_tab"><?php include("tabs/video.php"); ?></div>
        </div>
    </div>
</div>

<!---->
<!--<div class="school" id="school" style="display: none;">-->
<!--    <p>-->
<!--        <a href="--><?//=$temp_main_link?><!--" id ="reg_s" >Районы Орловской области / </a>-->
<!--        <a href="--><?//=$temp_main_link?><!--#title" id ="dist_s">Образовательные учреждения</a>-->
<!--    </p>-->
<!--    <h4>Описание образовательного учреждения </h4>-->
<!--    <div id = "sh_info">-->
<!--        --><?php
//        include("db/db_infoschooladmin.phtml");
//        ?>
<!--    </div>-->
<!--</div>-->