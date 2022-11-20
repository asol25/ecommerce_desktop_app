<?php


namespace app\models;


use app\core\Model;
use JetBrains\PhpStorm\ArrayShape;

class LoginForm extends Model
{
    public string $email = '';
    public string $password = '';

    public function attribute(): array
    {
        // TODO: Implement attribute() method.
    }


    #[ArrayShape(['email' => "array", 'password' => "array"])] public function rules(): array
    {
        return [
            'email' => [self::RULE_REQUIRED],
            'password' => [self::RULE_REQUIRED],
        ];
    }

    #[ArrayShape(['email' => "string", 'password' => "string"])] public function labels(): array
    {
        return [
            'email' => 'Your Email address',
            'password' => 'Password'
        ];
    }


    public function login(): bool
    {
    }
}