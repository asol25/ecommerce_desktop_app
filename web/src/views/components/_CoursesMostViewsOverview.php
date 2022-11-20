<?php

$api = \app\core\Application::$restApi;
$response = $api->fetch("GET",'http://localhost:5000/courses/limmit/3',false);
?>

<section class="featured section container" id="featured">
    <h2 class="section__title">
        Courses Most Views
    </h2>

    <div class="featured__container grid">
        <?php foreach ( $response as $index => $item): ?>
            <article class='featured__card'>
                <span class='featured__tag'>Sale</span>

                <img src='<?php echo($item["thumbnailUrl"]) ?>' alt=''
                     class='featured__img'>

                <div class='featured__data'>
                    <h3 class='featured__title'><?php echo($item["title"]) ?></h3>
                    <span class='featured__price'><?php echo($item["newPrice"]) ?>$</span>
                </div>

                <button class='button featured__button'>ADD TO CART</button>
            </article>
        <?php endforeach; ?>
    </div>
</section>
