<?php


namespace app\models;


use app\core\Model;
use JetBrains\PhpStorm\ArrayShape;

class CheckOutForm extends Model
{
    public string $amount = '';
    public string $order_desc = '';
    public string $bank_code = '';
    public string $language = '';

    #[ArrayShape(['email' => "array", 'password' => "array"])] public function rules(): array
    {
        return [
            '$amount' => [self::RULE_REQUIRED],
            '$order_desc' => [self::RULE_REQUIRED],
            '$bank_code' => [self::RULE_REQUIRED],
            '$language' => [self::RULE_REQUIRED],
        ];
    }

    #[ArrayShape(['email' => "string", 'password' => "string"])] public function labels(): array
    {
        return [
            '$amount' => [self::RULE_REQUIRED],
            '$order_desc' => [self::RULE_REQUIRED],
            '$bank_code' => [self::RULE_REQUIRED],
            '$language' => [self::RULE_REQUIRED],
        ];
    }

    /**
     * @return array
     */
    public function attribute(): array
    {
        // TODO: Implement attribute() method.
    }
}