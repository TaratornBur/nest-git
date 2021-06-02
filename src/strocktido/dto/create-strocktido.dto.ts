import { IsNotEmpty, Max, Min } from "class-validator";
export class CreateStrocktidoDto {
    @IsNotEmpty()
    name: string;

    @Max(9999)
    @Min(20)
    price: number;

    discount: number;
    
    salestatus: Boolean;
}
