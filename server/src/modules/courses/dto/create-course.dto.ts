import { CreateVideoDto } from "./../../videos/dto/create-video.dto";
import { CreateAnalyticDto } from "./../../analytic/dto/create-analytic.dto";
import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCourseDto {
  @ApiProperty()
  @IsString()
  readonly title: string;

  @ApiProperty()
  @IsString()
  readonly description: string;

  @ApiProperty()
  @IsString()
  readonly overviews: string;

  @ApiProperty()
  @IsString()
  readonly thumbnailUrl: string;

  @ApiProperty()
  @IsNumber()
  readonly oddPrice: number;

  @ApiProperty()
  @IsNumber()
  readonly newPrice: number;

  @ApiProperty()
  readonly analytic: CreateAnalyticDto;

  @ApiProperty()
  readonly videos: CreateVideoDto[];
}
