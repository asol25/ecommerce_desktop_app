<?php 
namespace app\core\middlewares;

abstract class IMiddleware
{
    abstract public function execute();
}
?>