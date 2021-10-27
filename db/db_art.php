<?php
$host = 'localhost'; // адрес сервера
$database = 'l910206f_dbdfolk'; // имя базы данных
$user = 'l910206f_dbdfolk'; // имя пользователя
$password = 'Folk_map_data2!';// пароль

$sql = mysqli_connect($host, $user, $password, $database)
or die("Ошибка " . mysqli_error($sql));

$lang='ru';
$idDistrict=0;
if($_POST['lang']  != null){
    $lang = $_POST['lang'];
}
if($_POST['idDistrict']  != null){
    $idDistrict = $_POST['idDistrict'];
}


$query ="SELECT * FROM folk_art_".$lang." WHERE id_district=".$idDistrict.";";

$result = mysqli_query($sql, $query) or die("Ошибка " . mysqli_error($sql));
mysqli_close($sql);
$art=[];
if($result)
{
    while($row = $result->fetch_assoc())// получаем все строки в цикле по одной
    {
        array_push($art,$row);
    }
}
echo (json_encode($art));