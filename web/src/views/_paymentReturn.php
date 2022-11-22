<?php
$vnp_SecureHash = $_GET['vnp_SecureHash'];
$inputData = array();
foreach ($_GET as $key => $value) {
    if (substr($key, 0, 4) == "vnp_") {
        $inputData[$key] = $value;
    }
}

unset($inputData['vnp_SecureHash']);
ksort($inputData);
$i = 0;
$hashData = "";
foreach ($inputData as $key => $value) {
    if ($i == 1) {
        $hashData = $hashData . '&' . urlencode($key) . "=" . urlencode($value);
    } else {
        $hashData = $hashData . urlencode($key) . "=" . urlencode($value);
        $i = 1;
    }
}

$secureHash = hash_hmac('sha512', $hashData, "KXSRPFCZENOOUEEVZOCHSGOOIONAHSGO");
?>
<!--Begin display -->
<section class="story section container">
    <div class="story__data">
        <p class="story__description">
        <div class="container">
            <div class="table-responsive">
                <form action="" id="create_form">
                    <div class="form-group">
                        <label>Mã đơn hàng:</label>
                        <label><?php echo $_GET['vnp_TxnRef'] ?></label>
                    </div>
                    <div class="form-group">

                        <label>Số tiền:</label>
                        <label><?php echo $_GET['vnp_Amount'] ?></label>
                    </div>
                    <div class="form-group">
                        <label>Mã phản hồi (vnp_ResponseCode):</label>
                        <label><?php echo $_GET['vnp_ResponseCode'] ?></label>
                    </div>
                    <div class="form-group">
                        <label>Mã GD Tại VNPAY:</label>
                        <label><?php echo $_GET['vnp_TransactionNo'] ?></label>
                    </div>
                    <div class="form-group">
                        <label>Mã Ngân hàng:</label>
                        <label><?php echo $_GET['vnp_BankCode'] ?></label>
                    </div>
                    <div class="form-group">
                        <label>Thời gian thanh toán:</label>
                        <label><?php echo (date("Y-m-d", time())); ?></label>
                    </div>
                    <div class="form-group">
                        <label>Kết quả:</label>
                        <label>
                            <?php
                            $payment = new \app\services\apis\payments\CheckPayment();

                            if ($secureHash == $vnp_SecureHash) {
                                if ($_GET['vnp_ResponseCode'] == '00') {
                                    echo "<span id='isChecked' data-check='{$payment->checkAccountPayment( $_GET['vnp_TxnRef'])}' style='color:blue'>GD Thanh cong</span>";
                                } else {
                                    $payment->checkAccountPayment( $_GET['vnp_TxnRef']);
                                    echo "<span style='color:red'>GD Khong thanh cong</span>";

                                }
                            } else {
                                $payment->checkAccountPayment( $_GET['vnp_TxnRef']);
                                echo "<span style='color:red'>Chu ky khong hop le</span>";
                            }
                            ?>

                        </label>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

<script>
    const payment = async () => {
    const isChecked = document.getElementById('isChecked');
        (async (isChecked) => {
            const rawResponse = await fetch('http://localhost:33714/payment', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({url: isChecked.dataset.check})
            });
            const content = await rawResponse.json();

            console.log(content);
        })(isChecked);
    }
    setTimeout(payment, 2000)
</script>