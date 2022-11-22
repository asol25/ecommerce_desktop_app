<?php

namespace app\controllers;

use app\core\Application;
use app\core\Controller;

class Courses extends Controller
{
    public function course(): void
    {
        $courseId = Application::$app->request->getRouteParam('id');
        $this->render('_courseDetail', []);
    }
}