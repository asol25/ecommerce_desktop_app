import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
export class CreateAnalyticDto {
  @ApiProperty()
  @IsNumber()
  readonly viewCount?: number;

  @ApiProperty()
  @IsString()
  readonly description?: string;

  @ApiProperty()
  @IsNumber()
  readonly videoCount?: number;

  @ApiProperty()
  @IsNumber()
  readonly watchTime?: number;

  @ApiProperty()
  @IsNumber()
  readonly bookingCount?: number;
}
