<?php


    function getAllDistrict($lang='ru'){
        $host = 'localhost'; // адрес сервера
        $database = 'l910206f_dbdfolk'; // имя базы данных
        $user = 'l910206f_dbdfolk'; // имя пользователя
        $password = 'Folk_map_data2!';// пароль

        $sql = mysqli_connect($host, $user, $password, $database)
        or die("Ошибка " . mysqli_error($sql));
        $query ="SELECT id,".$lang." FROM district;";
        $result = mysqli_query($sql, $query) or die("Ошибка " . mysqli_error($sql));

        return ($result);
    }

    function getFolkDist($id_district,$lang='ru'){
        $host = 'localhost'; // адрес сервера
        $database = 'l910206f_dbdfolk'; // имя базы данных
        $user = 'l910206f_dbdfolk'; // имя пользователя
        $password = 'Folk_map_data2!';// пароль

        $sql = mysqli_connect($host, $user, $password, $database)
        or die("Ошибка " . mysqli_error($sql));
        $query ="SELECT id,".$lang." FROM folk where distinct=".$id_district.";";
        $result = mysqli_query($sql, $query) or die("Ошибка " . mysqli_error($sql));

        return ($result);
    }
?>