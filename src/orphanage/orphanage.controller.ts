import { Body, Controller, Delete, Get, Param, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

import { Orphanage } from './orphanage.entity';

import { OrphanageService } from './orphanage.service';

@Controller('orphanages')
export class OrphanageController {

    constructor(private readonly service: OrphanageService) {}

    @Get()
    public async index() {
        return await this.service.getList();
    }

    @Get(':id')
    public async show(@Param() params: any) {
        const id = Number(params.id);
        return await this.service.get(id);
    }

    @Post()
    @UseInterceptors(FilesInterceptor('photos'))
    public async store(@Body() body: Orphanage, @UploadedFiles() photos: any[]) {
        if (photos && photos.length > 0) {
            body.photos = photos.map(file => ({ path: file.filename }));
        }
        console.log('Body: ', body);
        return await this.service.create({
            ...body,
            weekend: Boolean(body.weekend),
            latitude: Number(body.latitude),
            longitude: Number(body.longitude),
        });
    }

    @Delete(':id')
    public async destroy(@Param() params: any) {
        const id = Number(params.id);
        return await this.service.delete(id);
    }

}