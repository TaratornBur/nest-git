import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type StrockDocument = Strock & Document;
@Schema()
export class Strock{
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    discount: number;

    @Prop({ required: true })
    salestatus: Boolean;
    
}
export const StrockSchema = SchemaFactory.createForClass(Strock);