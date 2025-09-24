import { IsInt, IsString } from "class-validator";

// create dto
export class createCustomerDto{
    @IsString()
    name: string;
    @IsInt()
    age: number;
}