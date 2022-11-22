<?php


namespace app\controllers;


use app\core\Application;
use app\core\Controller;
use app\services\apis\payments\RequestPayment;

class PaymentController extends Controller
{

    public function payment(): void
    {
        $informationOrder = Application::$app->request->getRouteParams();
        $this->render('payment', [
            "payment" => $informationOrder
        ]);
    }

    public function paymentCallBack()
    {
        $searchString = "&vnp_ResponseCode=00";
        $string = $_SERVER['QUERY_STRING'];
        $this->render("_paymentReturn", []);
    }
    public function requestCreatePayment() {
//         echo "<pre>";
//         print_r($_POST);
//         echo "</pre>";
        $payment = new RequestPayment(
            $_POST['order_type'],
            $_POST['amount'],
            $_POST['order_desc'],
            $_POST['bank_code'],
            $_POST['language'],
            $_POST['txt_billing_fullname'],
            $_POST['txt_billing_email'],
            $_POST['txt_billing_mobile'],
            $_POST['txt_billing_addr1'],
            $_POST['txt_postalcode'],
            $_POST['txt_bill_city'],
            $_POST['txt_bill_state'],
            $_POST['txt_inv_email'],
            $_POST['txt_inv_customer'],
            $_POST['txt_inv_addr1'],
            $_POST['txt_inv_company'],
            $_POST['txt_inv_taxcode'],
        );
        $payment->createPaymentRequest();
    }

}