<?php

namespace app\services\apis\payments;

class CheckPayment
{

    public function __construct()
    {
    }

    public function checkAccountPayment($vnp_TxnRef): string
    {
        $hashSecret = "KXSRPFCZENOOUEEVZOCHSGOOIONAHSGO";
        $ipaddr = $_SERVER['REMOTE_ADDR'];
        $inputData = array(
            "vnp_Version" => '2.1.0',
            "vnp_Command" => "querydr",
            "vnp_TmnCode" => 'Z3SF12JH',
            "vnp_TxnRef" => $vnp_TxnRef,
            "vnp_OrderInfo" => 'Check thanh toan',
            "vnp_TransDate" => date('YmdHis'),
            "vnp_CreateDate" => date('YmdHis'),
            "vnp_IpAddr" => $ipaddr
        );
        $vnp_apiUrl = "http://sandbox.vnpayment.vn/merchant_webapi/merchant.html";
        ksort($inputData);
        $query = "";
        $i = 0;
        $hashdata = "";
        foreach ($inputData as $key => $value) {
            if ($i == 1) {
                $hashdata .= '&' . urlencode($key) . "=" . urlencode($value);
            } else {
                $hashdata .= urlencode($key) . "=" . urlencode($value);
                $i = 1;
            }
            $query .= urlencode($key) . "=" . urlencode($value) . '&';
        }

        $vnp_apiUrl = $vnp_apiUrl . "?" . $query;
        if (isset($hashSecret)) {
            $vnpSecureHash = hash_hmac('sha512', $hashdata, $hashSecret);
            $vnp_apiUrl .= 'vnp_SecureHash=' . $vnpSecureHash;
        }
        return $vnp_apiUrl;
    }
}