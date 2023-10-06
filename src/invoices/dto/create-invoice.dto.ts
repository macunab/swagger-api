import { ApiProperty } from '@nestjs/swagger';
import { CartItem } from '../schemas/cartItem.schema';
import { IsArray, IsNotEmptyObject, IsNumber, IsString } from 'class-validator';


export class CreateInvoiceDto {

    @ApiProperty({
        example: 'AC-12312312312312'
    })
    @IsString()
    readonly cod: string;

    @ApiProperty({
        example: '[{name: "tabla", quantity: 10, subtotal: 100}]'
    })
    @IsNotEmptyObject()
    @IsArray()
    readonly items: CartItem[];

    @ApiProperty({
        example: '105'
    })
    @IsNumber()
    readonly total: number;
}
