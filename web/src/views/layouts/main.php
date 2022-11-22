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

        <title>Fucker Courses</title>
    </head>

<body>
    <div>
        <?php include_once \app\core\Application::$ROOT_DIR . "/web/src/views/components/header.php"?>
        {{content}}
        <?php include_once \app\core\Application::$ROOT_DIR . "/web/src/views/components/footer.php"?>
    </div>
</body>

</html>