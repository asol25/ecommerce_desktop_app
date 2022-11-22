<?php

use app\core\Application;

require_once 'vendor/autoload.php';
require_once 'core/Application.php';

$app = new Application(dirname(__DIR__));

$app->on(Application::EVENT_BEFORE_REQUEST, function(){
    // echo "Before request from second installation";
});

$app->router->get('/', [\app\controllers\SiteController::class, 'home']);
$app->router->get('/courses', [\app\controllers\Courses::class, 'courses']);
$app->router->get('/payment/course/{id:\d+}/{price}', [\app\controllers\PaymentController::class, 'payment']);
$app->router->get('/VnPayReturn', [\app\controllers\PaymentController::class, 'paymentCallBack']);
$app->router->get('/course/{id:\d+}', [\app\controllers\Courses::class, 'course']);
$app->router->get('/add_to_cart', [\app\controllers\ProductsController::class, 'addToProductCart']);
$app->router->post('/vnpay_php/vnpay_create_payment', [\app\controllers\PaymentController::class, 'requestCreatePayment']);
$app->run();