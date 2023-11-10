import { IsArray, ArrayNotEmpty } from 'class-validator';

export class CreateDataDto {
  // @IsArray()
  // @ArrayNotEmpty()
  readonly date: string[];
}
