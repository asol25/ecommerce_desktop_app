<?php
?>

<!doctype html>
<html lang="en">

<head>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!--=============== FAVICON ===============-->
        <link rel="shortcut icon" href="/src/assets/img/favicon.png" type="image/x-icon">

        <!--=============== BOXICONS ===============-->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
        <!--=============== SWIPER CSS ===============-->
        <link rel="stylesheet" href="/src/assets/css/swiper-bundle.min.css">
        <!--=============== CSS ===============-->
        <link rel="stylesheet" href="/src/assets/css/styles.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <title>Fucker Courses</title>
    </head>

<body>
    <div>
        <?php include_once \app\core\Application::$ROOT_DIR . "/web/src/views/components/header.php"?>
        <?php include_once \app\core\Application::$ROOT_DIR . "/web/src/views/components/_Cart.php"?>
        {{content}}
        <?php include_once \app\core\Application::$ROOT_DIR . "/web/src/views/components/footer.php"?>
    </div>
</body>

</html>