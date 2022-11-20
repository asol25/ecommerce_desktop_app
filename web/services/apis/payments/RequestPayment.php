<?php


namespace app\services\apis\payments;


use JetBrains\PhpStorm\Pure;

class RequestPayment extends Payment implements InterfacePayments
{
    /**
     * @return mixed
     */
    public function createPaymentRequest(): mixed
    {
        // TODO: Implement createPaymentRequest() method.
        $inputData = array(
            "vnp_Version" => "2.1.0",
            "vnp_TmnCode" => "ZI3R0K6W",
            "vnp_Amount" => $this->getVnpAmount(),
            "vnp_Command" => "pay",
            "vnp_CreateDate" => $this->getVnpCreateDate(),
            "vnp_CurrCode" => "VND",
            "vnp_IpAddr" => $this->getVnpInvAddress(),
            "vnp_Locale" => $this->getVnpLocale(),
            "vnp_OrderInfo" => $this->getVnpOrderInfo(),
            "vnp_OrderType" => $this->getVnpOrderType(),
            "vnp_ReturnUrl" => $this->getVnpReturnUrl(),
            "vnp_TxnRef" => $this->getVnpTxnRef(),
            "vnp_ExpireDate"=> $this->getVnpExpireDate(),
            "vnp_Bill_Mobile"=> $this->getVnpBillMobile(),
            "vnp_Bill_Email"=> $this->getVnpBillEmail(),
            "vnp_Bill_FirstName"=> $this->getVnpBillFirstName(),
            "vnp_Bill_LastName"=> $this->getVnpBillLastName(),
            "vnp_Bill_Address"=> $this->getVnpBillAddress(),
            "vnp_Bill_City"=> $this->getVnpBillCity(),
            "vnp_Bill_Country"=> $this->getVnpBillCountry(),
            "vnp_Inv_Phone"=> $this->getVnpInvPhone(),
            "vnp_Inv_Email"=> $this->getVnpInvEmail(),
            "vnp_Inv_Customer"=> $this->getVnpInvCustomer(),
            "vnp_Inv_Address"=> $this->getVnpInvAddress(),
            "vnp_Inv_Company"=> $this->getVnpInvCompany(),
            "vnp_Inv_Taxcode"=> $this->getVnpInvTaxcode(),
            "vnp_Inv_Type"=> $this->getVnpOrderType(),
        );

        if ($this->getVnpBankCode() !== null && $this->getVnpBankCode() != "") {
            $inputData['vnp_BankCode'] = $this->getVnpBankCode();
        }
        if ($this->getVnpBillState() !== null && $this->getVnpBillState() != "") {
            $inputData['vnp_Bill_State'] = $this->getVnpBillState();
        }

        //var_dump($inputData);
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

        $configURL = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
        $vnp_Url = $configURL . "?" . $query;
        if (isset($vnp_HashSecret)) {
            $vnpSecureHash =   hash_hmac('sha512', $hashdata, $vnp_HashSecret);//
            $vnp_Url .= 'vnp_SecureHash=' . $vnpSecureHash;
        }
        $returnData = array('code' => '00'
        , 'message' => 'success'
        , 'data' => $vnp_Url);
        if (isset($_POST['redirect'])) {
            header('Location: ' . $vnp_Url);
            die();
        } else {
            echo json_encode($returnData);
        }
    }
}