<?php
$response = \app\core\Application::$app->session->get('courses');
?>
<!--==================== CART ====================-->
<div class="cart" id="cart">
    <i class='bx bx-x cart__close' id="cart-close"></i>

    <h2 class="cart__title-center">My Cart</h2>
    <?php if ($response) : ?>
    <div class="cart__container">
        <?php foreach ( $response as $index => $item): ?>
        <article class="cart__card">
            <div class="cart__box">
                <img src=<?php echo $item['thumbnailUrl'] ?> alt="" class="cart__img">
            </div>

            <div class="cart__details">
                <h3 class="cart__title"><?php echo $item['title'] ?></h3>
                <span class="cart__price"><?php echo($item["newPrice"]) ?>$</span>
                <i class='bx bx-trash-alt cart__amount-trash'></i>
            </div>
        </article>
        <?php endforeach; ?>
        <?php endif; ?>
    </div>
</div>