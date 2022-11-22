<?php
namespace app\controllers;

use app\core\Controller;
use app\models\LoginForm;

class SiteController extends Controller
{
    public function home(): void
    {
        $this->render('home', [
          'model' => new LoginForm(),
        ]);
    }

    public function loginPage():void
    {
        $this->render('_login', []);
    }
}