import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { catchError } from "rxjs";
import { firstValueFrom } from "rxjs/internal/firstValueFrom";

@Injectable()
export class PaymentService {
  constructor(private readonly httpService: HttpService) {}
  async getAccountPayment(url) {
    const { data } = await firstValueFrom(
      this.httpService.get(url).pipe(
        catchError((error) => {
          console.log(error.response.data);
          throw "An error happened!";
        }),
      ),
    );
    if (data.includes("vnp_TransactionStatus=00")) {
      console.log("Payment has Received");
    }
    return data;
  }

  sortObject(obj) {
    let sorted = {};
    let str = [];
    let key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        str.push(encodeURIComponent(key));
      }
    }
    str.sort();
    for (key = 0; key < str.length; key++) {
      sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
    }
    return sorted;
  }
}
