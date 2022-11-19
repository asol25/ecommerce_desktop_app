<?php


namespace app\core\controllers;


use app\core\Controller;

class SiteController extends Controller
{
    public function __construct()
    {
       $this->home();
    }

    public function home(): void
    {
        $this->render('home', [
            'name' => 'TheCodeholic',
            'age' => 24
        ]);
    }
}