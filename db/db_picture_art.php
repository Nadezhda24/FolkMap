<?php
$host = 'localhost'; // адрес сервера
$database = 'l910206f_dbdfolk'; // имя базы данных
$user = 'l910206f_dbdfolk'; // имя пользователя
$password = 'Folk_map_data2!';// пароль

$sql = mysqli_connect($host, $user, $password, $database)
or die("Ошибка " . mysqli_error($sql));


$id_art=1;

if($_POST['id_art']  != null){
    $id_art = $_POST['id_art'];
}


$query ="SELECT * FROM pictures WHERE id_art=".$id_art.";";

$result = mysqli_query($sql, $query) or die("Ошибка " . mysqli_error($sql));
mysqli_close($sql);
$arts=[];
if($result)
{
    while($row = $result->fetch_assoc())// получаем все строки в цикле по одной
    {
        array_push($arts,$row);
    }
}
echo (json_encode($arts));