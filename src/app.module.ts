import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

import { Orphanage } from './orphanage/orphanage.entity';
import { OrphanageService } from './orphanage/orphanage.service';
import { OrphanageController } from './orphanage/orphanage.controller';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        TypeOrmModule.forFeature([ Orphanage ]),
        MulterModule.register({
            storage: diskStorage({
                destination: __dirname+'/uploads',
                filename: (request, file, callback) => callback(null, `${Date.now()}-${file.originalname}`)
            })
        })
    ],
    controllers: [ OrphanageController ],
    providers: [ OrphanageService ],
})
export class AppModule {}