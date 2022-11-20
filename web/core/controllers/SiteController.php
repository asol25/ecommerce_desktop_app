<?php


namespace app\core\controllers;


use app\core\Controller;
use app\core\Model;
use app\models\LoginForm;

class SiteController extends Controller
{
    public function __construct()
    {
       $this->home();
    }

    public function home(): void
    {
        $this->render('home', [
          'model' => new LoginForm(),
        ]);
    }
}