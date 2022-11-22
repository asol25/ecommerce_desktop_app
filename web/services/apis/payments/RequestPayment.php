<?php


namespace app\services\apis\payments;


use app\core\Application;
use app\core\Request;
use app\core\Response;
use JetBrains\PhpStorm\Pure;

class RequestPayment extends Payment implements InterfacePayments
{
    /**
     * RequestPayment constructor.
     * @param string $vnp_OrderType
     * @param string $vnp_Amount
     * @param string $vnp_OrderInfo
     * @param string $vnp_BankCode
     * @param string $vnp_Locale
     * @param string $full_Name
     * @param string $vnp_Bill_Email
     * @param string $vnp_Bill_Mobile
     * @param string $vnp_Bill_Address
     * @param string $vnp_TxnRef
     * @param string $vnp_Bill_City
     * @param string $vnp_Bill_State
     * @param string $vnp_Inv_Email
     * @param string $vnp_Inv_Customer
     * @param string $vnp_Inv_Address
     * @param string $vnp_Inv_Company
     * @param string $vnp_Inv_Taxcode
     */
    public function __construct(string $vnp_OrderType, string $vnp_Amount, string $vnp_OrderInfo, string $vnp_BankCode, string $vnp_Locale, string $full_Name, string $vnp_Bill_Email, string $vnp_Bill_Mobile, string $vnp_Bill_Address, string $vnp_TxnRef, string $vnp_Bill_City, string $vnp_Bill_State, string $vnp_Inv_Email, string $vnp_Inv_Customer, string $vnp_Inv_Address, string $vnp_Inv_Company, string $vnp_Inv_Taxcode)
    {
        parent::__construct($vnp_OrderType, $vnp_Amount, $vnp_OrderInfo, $vnp_BankCode, $vnp_Locale, $full_Name, $vnp_Bill_Email, $vnp_Bill_Mobile, $vnp_Bill_Address, $vnp_TxnRef, $vnp_Bill_City, $vnp_Bill_State, $vnp_Inv_Email, $vnp_Inv_Customer, $vnp_Inv_Address, $vnp_Inv_Company, $vnp_Inv_Taxcode);
    }

    public function createPaymentRequest()
    {
        // TODO: Implement createPaymentRequest() method.
        $inputData = array(
            "vnp_Version" => "2.1.0",
            "vnp_TmnCode" => "Z3SF12JH",
            "vnp_Amount" => $this->getVnpAmount(),
            "vnp_Command" => "pay",
            "vnp_CreateDate" => $this->getVnpCreateDate(),
            "vnp_CurrCode" => "VND",
            "vnp_IpAddr" => $this->getVnpIpAddr(),
            "vnp_Locale" => $this->getVnpLocale(),
            "vnp_OrderInfo" => $this->getVnpOrderInfo(),
            "vnp_OrderType" => $this->getVnpOrderType(),
            "vnp_ReturnUrl" => $this->getVnpReturnUrl(),
            "vnp_TxnRef" => $this->getVnpCreateDate(),
            "vnp_ExpireDate" => $this->getVnpExpireDate(),
            "vnp_Bill_Mobile" => $this->getVnpBillMobile(),
            "vnp_Bill_Email" => $this->getVnpBillEmail(),
            "vnp_Bill_FirstName" => $this->getVnpBillFirstName(),
            "vnp_Bill_LastName" => $this->getVnpBillLastName(),
            "vnp_Bill_Address" => $this->getVnpBillAddress(),
            "vnp_Bill_City" => $this->getVnpBillCity(),
            "vnp_Inv_Email" => $this->getVnpInvEmail(),
            "vnp_Inv_Customer" => $this->getVnpInvCustomer(),
            "vnp_Inv_Address" => $this->getVnpInvAddress(),
            "vnp_Inv_Company" => $this->getVnpInvCompany(),
        );

        if ($this->getVnpBankCode() !== null && $this->getVnpBankCode() != "") {
            $inputData['vnp_BankCode'] = $this->getVnpBankCode();
        }
        if ($this->getVnpBillState() !== null && $this->getVnpBillState() != "") {
            $inputData['vnp_Bill_State'] = $this->getVnpBillState();
        }
        $configURL = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";

        ksort($inputData);
        $query = "";
        $i = 0;
        $hashData = "";
        foreach ($inputData as $key => $value) {
            if ($i == 1) {
                $hashData .= '&' . urlencode($key) . "=" . urlencode($value);
            } else {
                $hashData .= urlencode($key) . "=" . urlencode($value);
                $i = 1;
            }
            $query .= urlencode($key) . "=" . urlencode($value) . '&';
        }
        $vnp_Url =  $configURL . "?" . $query;
        $vnpSecureHash =  hash_hmac("sha512", $hashData, $this->getVnpSecureHash());
        $vnp_Url .= 'vnp_SecureHash=' . $vnpSecureHash;

        $response = new Response();
        $response->redirect($vnp_Url);
    }
}
