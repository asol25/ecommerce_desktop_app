<?php
/** @var mixed $key $ */
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
                        <label><?php echo(date("Y-m-d", time())); ?></label>
                    </div>
                    <div class="form-group">
                        <label>Kết quả:</label>
                        <label>
                            <?php
                            if ($secureHash == $vnp_SecureHash) {
                                if ($_GET['vnp_ResponseCode'] == '00') {
                                    echo "<span style='color:blue'>GD Thanh cong</span>"; 
                                } else {
                                    echo "<span style='color:red'>GD Khong thanh cong</span>";
                                }
                            } else {
                                echo "<span style='color:red'>Chu ky khong hop le</span>";
                            }
                            ?>

                        </label>
                    </div>
                </div>
            </div>
        </div>
    </section>