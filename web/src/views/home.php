<?php
/** @var mixed $key */
use app\core\form\Form;

echo "<pre>";
var_dump($$key['model']);
echo "</pre>";
?>

<div>
    <h1>Login</h1>

    <?php $form = Form::begin('', 'get') ?>
        <?php echo $form->field($$key['model'], 'email') ?>
        <?php echo $form->field($$key['model'], 'password')->passwordField() ?>
        <button class="btn btn-success">Submit</button>
    <?php Form::end() ?>
</div>
