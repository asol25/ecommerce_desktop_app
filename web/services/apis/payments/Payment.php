<?php


namespace app\services\apis\payments;


class Payment
{
    public string $vnp_OrderType;
    public string $vnp_TxnRef;
    public string $vnp_OrderInfo;
    public string $vnp_Amount;
    public string $vnp_Locale;
    public string $vnp_BankCode;
    public string $vnp_IpAddr;
    public string $vnp_ExpireDate;
    public string $vnp_CreateDate;
    public string $vnp_Bill_Mobile;
    public string $vnp_Bill_Email;
    public string $vnp_Bill_FirstName;
    public string $vnp_Bill_LastName;
    public string $full_Name;
    public string $vnp_Bill_Address;
    public string $vnp_Bill_City;
    public string $vnp_Bill_Country;
    public string $vnp_Bill_State;
    public string $vnp_Inv_Phone;
    public string $vnp_Inv_Email;
    public string $vnp_Inv_Customer;
    public string $vnp_Inv_Address;
    public string $vnp_Inv_Company;
    public string $vnp_Inv_Taxcode;
    public string $vnp_Inv_Type;
    public string $vnp_Version;
    public string $vnp_ReturnUrl;
    public string $vnp_SecureHash;

    /**
     * Payment constructor.
     */
    public function __construct(
        string $vnp_OrderType,
        string $vnp_Amount,
        string $vnp_OrderInfo,
        string $vnp_BankCode,
        string $vnp_Locale,
        string $full_Name,
        string $vnp_Bill_Email,
        string $vnp_Bill_Mobile,
        string $vnp_Bill_Address,
        string $vnp_TxnRef,
        string $vnp_Bill_City,
        string $vnp_Bill_State,
        string $vnp_Inv_Email,
        string $vnp_Inv_Customer,
        string $vnp_Inv_Address,
        string $vnp_Inv_Company,
        string $vnp_Inv_Taxcode,
    ) {
        $this->vnp_TxnRef = $vnp_TxnRef;
        $this->vnp_OrderInfo = $vnp_OrderInfo;
        $this->vnp_OrderType = $vnp_OrderType;
        $this->vnp_Locale = $vnp_Locale;
        $this->vnp_BankCode = $vnp_BankCode;
        $this->vnp_Bill_Mobile = $vnp_Bill_Mobile;
        $this->vnp_Bill_Email = $vnp_Bill_Email;
        $this->vnp_Bill_Address = $vnp_Bill_Address;
        $this->vnp_Bill_City = $vnp_Bill_City;
        $this->vnp_Bill_State = $vnp_Bill_State;
        $this->vnp_Inv_Email = $vnp_Inv_Email;
        $this->vnp_Inv_Customer = $vnp_Inv_Customer;
        $this->vnp_Inv_Address = $vnp_Inv_Address;
        $this->vnp_Inv_Company = $vnp_Inv_Company;
        $this->vnp_Inv_Taxcode = $vnp_Inv_Taxcode;

        $this->setVnpIpAddr();
        $this->setVnpCreateDate();
        $this->setVnpExpireDate($this->vnp_CreateDate);
        $this->setVnpAmount($vnp_Amount);
        $this->setFullName($full_Name);
        $this->setVnpReturnUrl();
        $this->setVnpIpAddr();
        $this->setVnpSecureHash();
    }

    /**
     * @return string
     */
    public function getVnpReturnUrl(): string
    {
        return $this->vnp_ReturnUrl;
    }

    /**
     * @return string
     */
    public function getFullName(): string
    {
        return $this->full_Name;
    }

    /**
     * @param string $full_Name
     */
    public function setFullName(string $full_Name): void
    {
        if (isset($full_Name) && trim($full_Name) != '') {
            $name = explode(' ', $full_Name);
            $this->setVnpBillFirstName(array_shift($name));
            $this->setVnpBillLastName(array_pop($name));
        }
    }

    /**
     * @return string
     */
    public function getVnpTxnRef(): string
    {
        return $this->vnp_TxnRef;
    }

    /**
     * @param string $vnp_TxnRef
     */
    public function setVnpTxnRef(string $vnp_TxnRef): void
    {
        $this->vnp_TxnRef = $vnp_TxnRef;
    }

    /**
     * @return string
     */
    public function getVnpOrderInfo(): string
    {
        return $this->vnp_OrderInfo;
    }

    /**
     * @param string $vnp_OrderInfo
     */
    public function setVnpOrderInfo(string $vnp_OrderInfo): void
    {
        $this->vnp_OrderInfo = $vnp_OrderInfo;
    }

    /**
     * @return string
     */
    public function getVnpOrderType(): string
    {
        return $this->vnp_OrderType;
    }

    /**
     * @param string $vnp_OrderType
     */
    public function setVnpOrderType(string $vnp_OrderType): void
    {
        $this->vnp_OrderType = $vnp_OrderType;
    }

    /**
     * @return string
     */
    public function getVnpAmount(): string
    {
        return $this->vnp_Amount;
    }

    /**
     * @param string $vnp_Amount
     */
    public function setVnpAmount(string $vnp_Amount): void
    {
        $this->vnp_Amount = $vnp_Amount * 100;
    }

    /**
     * @return string
     */
    public function getVnpLocale(): string
    {
        return $this->vnp_Locale;
    }

    /**
     * @param string $vnp_Locale
     */
    public function setVnpLocale(string $vnp_Locale): void
    {
        $this->vnp_Locale = $vnp_Locale;
    }

    /**
     * @return string
     */
    public function getVnpBankCode(): string
    {
        return $this->vnp_BankCode;
    }

    /**
     * @param string $vnp_BankCode
     */
    public function setVnpBankCode(string $vnp_BankCode): void
    {
        $this->vnp_BankCode = $vnp_BankCode;
    }

    /**
     * @return string
     */
    public function getVnpIpAddr(): string
    {
        return $this->vnp_IpAddr;
    }

    /**
     */
    public function setVnpIpAddr(): void
    {
        $ipAddress = $_SERVER['REMOTE_ADDR'];
        $this->vnp_IpAddr = $ipAddress;
    }

    /**
     * @return string
     */
    public function getVnpExpireDate(): string
    {
        return $this->vnp_ExpireDate;
    }

   

    /**
     * @return string
     */
    public function getVnpBillMobile(): string
    {
        return $this->vnp_Bill_Mobile;
    }

    /**
     * @param string $vnp_Bill_Mobile
     */
    public function setVnpBillMobile(string $vnp_Bill_Mobile): void
    {
        $this->vnp_Bill_Mobile = $vnp_Bill_Mobile;
    }

    /**
     * @return string
     */
    public function getVnpBillEmail(): string
    {
        return $this->vnp_Bill_Email;
    }

    /**
     * @param string $vnp_Bill_Email
     */
    public function setVnpBillEmail(string $vnp_Bill_Email): void
    {
        $this->vnp_Bill_Email = $vnp_Bill_Email;
    }

    /**
     * @return string
     */
    public function getVnpBillFirstName(): string
    {
        return $this->vnp_Bill_FirstName;
    }

    /**
     * @param string $vnp_Bill_FirstName
     */
    public function setVnpBillFirstName(string $vnp_Bill_FirstName): void
    {
        $this->vnp_Bill_FirstName = $vnp_Bill_FirstName;
    }

    /**
     * @return string
     */
    public function getVnpBillLastName(): string
    {
        return $this->vnp_Bill_LastName;
    }

    /**
     * @param string $vnp_Bill_LastName
     */
    public function setVnpBillLastName(string $vnp_Bill_LastName): void
    {
        $this->vnp_Bill_LastName = $vnp_Bill_LastName;
    }

    /**
     * @return string
     */
    public function getVnpBillAddress(): string
    {
        return $this->vnp_Bill_Address;
    }

    /**
     * @param string $vnp_Bill_Address
     */
    public function setVnpBillAddress(string $vnp_Bill_Address): void
    {
        $this->vnp_Bill_Address = $vnp_Bill_Address;
    }

    /**
     * @return string
     */
    public function getVnpBillCity(): string
    {
        return $this->vnp_Bill_City;
    }

    /**
     * @param string $vnp_Bill_City
     */
    public function setVnpBillCity(string $vnp_Bill_City): void
    {
        $this->vnp_Bill_City = $vnp_Bill_City;
    }

    /**
     * @return string
     */
    public function getVnpBillCountry(): string
    {
        return $this->vnp_Bill_Country;
    }

    /**
     * @param string $vnp_Bill_Country
     */
    public function setVnpBillCountry(string $vnp_Bill_Country): void
    {
        $this->vnp_Bill_Country = $vnp_Bill_Country;
    }

    /**
     * @return string
     */
    public function getVnpBillState(): string
    {
        return $this->vnp_Bill_State;
    }

    /**
     * @param string $vnp_Bill_State
     */
    public function setVnpBillState(string $vnp_Bill_State): void
    {
        $this->vnp_Bill_State = $vnp_Bill_State;
    }

    /**
     * @return string
     */
    public function getVnpInvPhone(): string
    {
        return $this->vnp_Inv_Phone;
    }

    /**
     * @param string $vnp_Inv_Phone
     */
    public function setVnpInvPhone(string $vnp_Inv_Phone): void
    {
        $this->vnp_Inv_Phone = $vnp_Inv_Phone;
    }

    /**
     * @return string
     */
    public function getVnpInvEmail(): string
    {
        return $this->vnp_Inv_Email;
    }

    /**
     * @param string $vnp_Inv_Email
     */
    public function setVnpInvEmail(string $vnp_Inv_Email): void
    {
        $this->vnp_Inv_Email = $vnp_Inv_Email;
    }

    /**
     * @return string
     */
    public function getVnpInvCustomer(): string
    {
        return $this->vnp_Inv_Customer;
    }

    /**
     * @param string $vnp_Inv_Customer
     */
    public function setVnpInvCustomer(string $vnp_Inv_Customer): void
    {
        $this->vnp_Inv_Customer = $vnp_Inv_Customer;
    }

    /**
     * @return string
     */
    public function getVnpInvAddress(): string
    {
        return $this->vnp_Inv_Address;
    }

    /**
     * @param string $vnp_Inv_Address
     */
    public function setVnpInvAddress(string $vnp_Inv_Address): void
    {
        $this->vnp_Inv_Address = $vnp_Inv_Address;
    }

    /**
     * @return string
     */
    public function getVnpInvCompany(): string
    {
        return $this->vnp_Inv_Company;
    }

    /**
     * @param string $vnp_Inv_Company
     */
    public function setVnpInvCompany(string $vnp_Inv_Company): void
    {
        $this->vnp_Inv_Company = $vnp_Inv_Company;
    }

    /**
     * @return string
     */
    public function getVnpInvTaxcode(): string
    {
        return $this->vnp_Inv_Taxcode;
    }

    /**
     * @param string $vnp_Inv_Taxcode
     */
    public function setVnpInvTaxcode(string $vnp_Inv_Taxcode): void
    {
        $this->vnp_Inv_Taxcode = $vnp_Inv_Taxcode;
    }

    /**
     * @return string
     */
    public function getVnpInvType(): string
    {
        return $this->vnp_Inv_Type;
    }

    /**
     * @param string $vnp_Inv_Type
     */
    public function setVnpInvType(string $vnp_Inv_Type): void
    {
        $this->vnp_Inv_Type = $vnp_Inv_Type;
    }

    /**
     * @return string
     */
    public function getVnpVersion(): string
    {
        return $this->vnp_Version;
    }

    /**
     * @param string $vnp_Version
     */
    public function setVnpVersion(string $vnp_Version): void
    {
        $this->vnp_Version = $vnp_Version;
    }

    /**
     * Setter for vnp_ReturnUrl.
     */
    public function setVnpReturnUrl(): void
    {
        
        $url = "{$_SERVER['HTTP_HOST']}/VnPayReturn";
        $this->vnp_ReturnUrl = $url;
    }

    /**
     * Setter for vnp_CreateDate.
     */
    public function setVnpCreateDate(): void
    {
        $startTime = date('YmdHis');
        $this->vnp_CreateDate = date('YmdHis',strtotime('+420 minutes',strtotime(  $startTime )));
        
    }

     /**
     * Setter for vnp_Expire.
     */
    public function setVnpExpireDate($vnp_CreateDate): void
    {
        $this->vnp_ExpireDate = date('YmdHis',strtotime('+15 minutes',strtotime($this->vnp_CreateDate)));
    }

    /**
     * @return string
     */
    public function getVnpCreateDate(): string
    {
        return $this->vnp_CreateDate;
    }

    /**
     * @return string
     */
    public function getVnpSecureHash(): string
    {
        return $this->vnp_SecureHash;
    }

    /**
     * Setter for vnp_SecureHash.
     */
    public function setVnpSecureHash(): void
    {
        $hash = "KXSRPFCZENOOUEEVZOCHSGOOIONAHSGO";
        $this->vnp_SecureHash = $hash;
    }
}
