<?php
namespace app\controllers;
use app\core\Controller;

class ProductsController extends Controller
{
  public function addToProductCart()
  { 
    $data = $_POST['data'] or $_REQUEST['data'];
    return $data;
  }
}