import { Transform } from 'class-transformer';
import { IsString, IsPhoneNumber, IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class OrphanageValid {
    
    @IsString()
    name: string;

    @IsString()
    about: string;

    @IsPhoneNumber('BR')
    whatsapp: string;

    @IsString()
    instructions: string;

    @IsString()
    visitHour: string;

    @Transform(Boolean)
    @IsBoolean()
    weekend: boolean;

    @Transform(Number)
    @IsNumber()
    latitude: number;

    @Transform(Number)
    @IsNumber()
    longitude: number;

    @IsOptional()
    photos: any[];

}