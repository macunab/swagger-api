import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class CartItem {

    _id?: string;

    @Prop()
    itemName: string;

    @Prop({ required: true, default: 1})
    quantity: number;

    @Prop({ required: true })
    subtotal: number;
}

export const CartItemSchema = SchemaFactory.createForClass(CartItem);

