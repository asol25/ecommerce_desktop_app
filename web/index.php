<?php

use app\core\Application;

require_once 'vendor/autoload.php';
require_once 'core/Application.php';

$app = new Application(dirname(__DIR__));

$app->on(Application::EVENT_BEFORE_REQUEST, function(){
    // echo "Before request from second installation";
});

$app->router->get('/', [\app\core\controllers\SiteController::class, 'home']);
$app->router->get('/example/{id:\d+}/{username}', [\app\core\controllers\SiteController::class, 'home']);
$app->run();