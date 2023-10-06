import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CartItem, CartItemSchema } from './cartItem.schema';

@Schema({ timestamps: true })
export class Invoice {

    _id?: string;
    
    @Prop({ required: true })
    cod: string;

    @Prop({ type: [CartItemSchema] })
    items: CartItem[];

    @Prop({ required: true })
    total: number;

}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
