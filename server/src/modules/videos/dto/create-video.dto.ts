import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateVideoDto {
  @ApiProperty()
  @IsString()
  readonly title: string;

  @ApiProperty()
  @IsString()
  readonly description: string;

  @ApiProperty()
  @IsString()
  readonly thumbanailUrl: string;

  @ApiProperty()
  @IsString()
  readonly videoUrl: string;
}
