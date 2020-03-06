注册php代码：
<?php
    include './test.php';
    $uphon = $_POST['phone'];
    $upass= $_POST['password'];
    $link = mysqli_connect('localhost','root','root','user');
    $sql2 = "SELECT * FROM `zhuce` WHERE `phone` = '$uphon'";
    $res2 = mysqli_query($link,$sql2);
    $row2 = mysqli_fetch_assoc($res2);
   if(!$row2){
    $sql = "INSERT INTO `zhuce` (`phone`, `password`) VALUES('$uphon','$upass')";
    $res = mysqli_query($link,$sql);
    echo(json_encode($res));
   }else{
    echo "该用户已被注册";
   }
    mysqli_close($link);
?>
登录php代码：
<?php
    include './test.php';
    $uphon = $_POST['phone'];
    $upass = $_POST['password'];
    $link = mysqli_connect('localhost','root','root','user');
    $sql2 = "SELECT * FROM `zhuce` WHERE `phone` = '$uphon' AND `password`='$upass'";
    $res2 = mysqli_query($link,$sql2);
    $row2 = mysqli_fetch_assoc($res2);
    mysqli_close($link);
    echo json_encode($row2)

    ?>