import { HttpService } from "@nestjs/axios";
import { Body, Controller, Post, Req } from "@nestjs/common";
import { PaymentService } from "./payment.service";

@Controller("payment")
export class PaymentController {
  constructor(
    private readonly paymentService: PaymentService,
    private readonly httpService: HttpService,
  ) {}

  @Post("/create_payment_url")
  createRequestPaymentUrl(@Body() body, @Req() req) {
    let ipAddr =
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress;

    const {
      vnp_Amount,
      vnp_BankCode,
      vnp_IpAddr,
      vnp_Locale,
      vnp_OrderInfo,
      vnp_OrderType,
      vnp_TxnRef,
      vnp_CreateDate,
    } = body;
    let tmnCode = "Z3SF12JH";
    let secretKey = "KXSRPFCZENOOUEEVZOCHSGOOIONAHSGO";
    let vnpUrl = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
    let returnUrl = "http://localhost:3000/payment/";

    let date = new Date();

    let currCode = "VND";
    let vnp_Params = {};
    vnp_Params["vnp_Version"] = "2.1.0";
    vnp_Params["vnp_Command"] = "pay";
    vnp_Params["vnp_TmnCode"] = tmnCode;
    vnp_Params["vnp_Locale"] = vnp_Locale;
    vnp_Params["vnp_CurrCode"] = currCode;
    vnp_Params["vnp_TxnRef"] = "12312";
    vnp_Params["vnp_OrderInfo"] = vnp_OrderInfo;
    vnp_Params["vnp_OrderType"] = vnp_OrderType;
    vnp_Params["vnp_Amount"] = vnp_Amount;
    vnp_Params["vnp_ReturnUrl"] = returnUrl;
    vnp_Params["vnp_IpAddr"] = ipAddr;
    vnp_Params["vnp_CreateDate"] = 20221128124510;
    if (vnp_BankCode !== null && vnp_BankCode !== "") {
      vnp_Params["vnp_BankCode"] = vnp_BankCode;
    }

    vnp_Params = this.paymentService.sortObject(vnp_Params);

    let querystring = require("qs");
    let signData = querystring.stringify(vnp_Params, { encode: false });
    let crypto = require("crypto");
    let hmac = crypto.createHmac("sha512", secretKey);
    let signed = hmac.update(new Buffer(signData, "utf-8")).digest("hex");
    vnp_Params["vnp_SecureHash"] = signed;
    vnpUrl += "?" + querystring.stringify(vnp_Params, { encode: false });
    return vnpUrl;
  }

  @Post("")
  getAccountPayment(@Body() body) {
    const { url } = body;
    return this.paymentService.getAccountPayment(url);
  }
}
