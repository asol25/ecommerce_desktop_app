import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentService {
  constructor(
    private readonly httpService: HttpService
  ) { }
  async getAccountPayment(url) {
   const isChecked = await this.httpService.get(url);
   const payload = isChecked.subscribe();
  }
}
