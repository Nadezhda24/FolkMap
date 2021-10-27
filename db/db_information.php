<?php
$host = 'localhost'; // адрес сервера
$database = 'l910206f_dbdfolk'; // имя базы данных
$user = 'l910206f_dbdfolk'; // имя пользователя
$password = 'Folk_map_data2!';// пароль
$lang='ru';

if($_POST['lang']  != null){
    $lang = $_POST['lang'];
}

$sql = mysqli_connect($host, $user, $password, $database)
or die("Ошибка " . mysqli_error($sql));
$query ="SELECT id,".$lang." as name FROM district;";
echo $query;
$result = mysqli_query($sql, $query) or die("Ошибка " . mysqli_error($sql));
mysqli_close($sql);
$districts=[];
if($result)
{
    while($row = $result->fetch_assoc())// получаем все строки в цикле по одной
    {

        //создание массива с районами для создания заголовка при  наведении
        array_push($districts,$row);
    }
}
echo (json_encode($districts));

