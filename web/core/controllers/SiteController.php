<?php


namespace app\core\controllers;


use app\core\Controller;
use app\core\middlewares\AuthMiddleware;

class SiteController extends Controller
{
    public function __construct()
    {
       $this->home();
    }

    public function home(): string
    {
        return $this->render('home', [
            'name' => 'TheCodeholic'
        ]);
    }
}