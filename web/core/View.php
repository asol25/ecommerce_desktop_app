<?php 
namespace app\core;

class View
{
    public string $title = '';

    public function renderView($view, array $params): void
    {
        $layoutName = Application::$app->layout;
        if (Application::$app->controller) {
            $layoutName = Application::$app->controller->layout;
        }
        $viewContent = $this->renderViewOnly($view, $params);
        ob_start();
        include_once Application::$ROOT_DIR."/web/src/views/layouts/$layoutName.php";
        $layoutContent = ob_get_clean();
        echo(str_replace('{{content}}', $viewContent, $layoutContent));
    }

    public function renderViewOnly($view, array $params): bool|string
    {
        ob_start();
        include_once Application::$ROOT_DIR."/web/src/views/$view.php";
        return ob_get_clean();
    }
}
?>