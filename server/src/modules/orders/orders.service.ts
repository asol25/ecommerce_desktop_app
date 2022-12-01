import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import console from "console";
import { DataSource, Repository } from "typeorm";
import { Orders } from "./entity/orders.entity";

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Orders)
    private readonly ordersRepository: Repository<Orders>,
    private readonly dataSource: DataSource,
  ) {}

  async creteaAccountBought(account: any) {
    if (!account) {
      throw new Error("Missing account and courses");
    }

    try {
      const { accountId, coursesId } = account;
      const isChecked = await this.ordersRepository.findOneBy({
        accounts: {
          id: account.id,
        },
        courses: {
          id: coursesId,
        },
      });

      if (isChecked) {
        return "203";
      }

      const response = await this.dataSource
        .createQueryBuilder()
        .insert()
        .into(Orders)
        .values({
          accounts: accountId,
          courses: coursesId as unknown as () => string,
          isActive: true,
        })
        .execute();

      return response.identifiers
        ? response.identifiers
        : "Error when creating orders";
    } catch (error) {
      throw error;
    }
  }

  async getAccountPaymentCourse(_email) {
    try {
      const response = await this.ordersRepository.find({
        relations: {
          courses: true,
        },
        where: {
          accounts: {
            email: _email,
          },
          isActive: true,
        },
        select: ["courses"],
      });

      if (!response) {
        return [];
      }
      return response;
    } catch (error) {
      console.error(error.message);
    }
  }

  async getOrdersRepository() {
    return this.ordersRepository;
  }
  async getTotalBought(): Promise<number> {
    try {
      const response = await this.ordersRepository.count();
      return response;
    } catch (error) {
      console.error(error.message);
    }
  }

  async getAnalyticOrdersByNowMonth(_month: number): Promise<Orders[]> {
    try {
      if (_month) {
        throw new Error("Missing month");
      }

      const response = await this.dataSource
        .getRepository(Orders)
        .createQueryBuilder("order")
        .select(`CONCAT(order.createdDate)`, "date")
        .addSelect(`COUNT(order.createdDate)`, "sales")
        .where("extract(DAY FROM order.createdDate)= :month", { month: _month })
        .groupBy(`order.createdDate`)
        .orderBy("order.createdDate", "ASC")
        .getRawMany();

      return response;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
}
