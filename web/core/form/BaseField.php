<?php


namespace app\core\form;


use app\core\Model;

abstract class BaseField
{
    public Model $model;
    public string $attribute;
    public string $type;

    public function __construct($model, string $attribute)
    {
        $this->model = $model;
        $this->attribute = $attribute;
//        echo "<pre>";
//        print_r($this->model);
//        echo "</pre>";
    }

    public function __toString()
    {
        return sprintf('<div class="form-group">
                <label>%s</label>
                %s
                <div class="invalid-feedback">
                    %s
                </div>
            </div>',
            $this->model->getLabel($this->attribute),
            $this->renderInput(),
            $this->model->getFirstError($this->attribute)
        );
    }

    abstract public function renderInput();
}