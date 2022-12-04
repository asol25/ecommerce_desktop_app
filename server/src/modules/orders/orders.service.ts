import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { Orders } from "./entity/orders.entity";

@Injectable()
export class OrdersService {
  logger: Logger;
  constructor(
    @InjectRepository(Orders)
    private readonly ordersRepository: Repository<Orders>,
    private readonly dataSource: DataSource,
  ) {
    this.logger = new Logger(OrdersService.name);
  }

  async getTotalPrice(): Promise<number> {
    try {
      this.logger.log("Start Sum Price in Orders Entities");
      const response = await this.ordersRepository
        .createQueryBuilder("orders")
        .leftJoin("orders.courses", "courses")
        .select("SUM(courses.newPrice)", "totalPrices")
        .getRawOne();

      if (!response) {
        throw new BadRequestException("Have error in process query");
      }

      this.logger.log("The Result is already response", { response });
      return response;
    } catch (error) {
      this.logger.error(error);
    }
  }

  async getAnalyticOrdersByNowYear() {
    try {
      this.logger.log("Start Sum Price by Year in Orders Entities");
      const response = await this.ordersRepository
        .createQueryBuilder("order")
        .select(`CONCAT(extract(MONTH FROM order.createdDate))`, "date")
        .addSelect(`COUNT(extract(MONTH FROM order.createdDate))`, "sales")
        .where("extract(YEAR FROM order.createdDate)= :month", { month: 2022 })
        .groupBy(`extract(MONTH FROM order.createdDate)`)
        .orderBy("extract(MONTH FROM order.createdDate)", "ASC")
        .getRawMany();

      if (!response) {
        throw new BadRequestException("Have error process query");
      }
      this.logger.log("The Result is already response", {
        response,
      });

      return response;
    } catch (error) {
      this.logger.error(error);
    }
  }

  async createdAccountBought(account: any) {
    if (!account) {
      throw new Error("Missing account and courses");
    }

    try {
      const { accountId, coursesId } = account;
      this.logger.log(
        `#accountId: number - #coursesId: number is already at OrdersService`,
        { accountId, coursesId },
      );

      this.logger.log(`Start checked user was bought in the passed`);
      const isChecked = await this.ordersRepository.findOneBy({
        accounts: {
          id: accountId,
        },
        courses: {
          id: coursesId,
        },
      });

      if (isChecked) {
        this.logger.error(`User was bought in the passed`, { isChecked });
        return "203";
      }

      this.logger.log(`Start save user into Orders Entities`);
      const response = await this.ordersRepository.insert({
        accounts: {
          id: accountId,
        },
        courses: {
          id: coursesId,
        },
        isActive: true,
      });

      this.logger.log("The result is already response", { response });
      return response.identifiers
        ? response.identifiers
        : "Error when creating orders";
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async getAccountPaymentCourse(_email: string) {
    this.logger.log(`#_email: string is already at OrdersService`, { _email });
    if (!_email) {
      throw new Error("Miss Email");
    }
    try {
      this.logger.log(`Start found user was bought in the passed`);
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

      if (!response[0]) {
        this.logger.error(
          `The user is not found in the list of Orders Entities`,
        );
        return [];
      }

      this.logger.log("The Result is already response");
      return response;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async getOrdersRepository() {
    return this.ordersRepository;
  }

  async getTotalBought(): Promise<number> {
    try {
      this.logger.log("Start count Orders Entities");
      const response = await this.ordersRepository.count();
      this.logger.log("The total number start response");
      return response;
    } catch (error) {
      this.logger.error(error);
    }
  }

  async getAnalyticOrdersByNowMonth(_month: number): Promise<Orders[]> {
    this.logger.log(`#_month: ${_month} is already at OrdersService`);
    try {
      if (!_month) {
        throw new Error("Missing month");
      }

      this.logger.log(`Start found in Orders Entities`);
      const response = await this.dataSource
        .getRepository(Orders)
        .createQueryBuilder("order")
        .select(`CONCAT(order.createdDate)`, "date")
        .addSelect(`COUNT(order.createdDate)`, "sales")
        .where("extract(MONTH FROM order.createdDate)= :month", {
          month: _month,
        })
        .groupBy(`order.createdDate`)
        .orderBy("order.createdDate", "ASC")
        .getRawMany();

      if (!response[0]) {
        throw new NotFoundException(
          `The action getAnalyticOrdersByNowMonth not found:  #${_month}`,
        );
      }

      this.logger.log("The Result is already response");
      return response;
    } catch (error) {
      this.logger.error(error);
    }
  }

  async getOrdersBySlug(coursesId: number, _email: string): Promise<Orders> {
    this.logger.log(`#coursesId: number - #_email: string`, {
      coursesId,
      _email,
    });
    try {
      if (!coursesId || !_email) {
        throw new NotFoundException(
          `The coursesId : #${coursesId} or _email : #${_email} is required`,
        );
      }

      this.logger.log("Start found Orders Entities");
      const response = await this.ordersRepository.findOneBy({
        courses: {
          id: coursesId,
        },
        accounts: {
          email: _email,
        },
      });

      if (!response) {
        throw new NotFoundException(
          `The active getOrdersBySlug #coursesId: #${coursesId} - #_email: #${_email}`,
        );
      }

      this.logger.log("The Result is already response");
      return response;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
