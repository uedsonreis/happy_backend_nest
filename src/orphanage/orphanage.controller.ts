import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, UploadedFiles, UseFilters, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

import { OrphanageViewInterceptor, OrphanagesViewInterceptor } from 'src/views/orphanage.interceptor';
import { OrphanageService } from './orphanage.service';
import { OrphanageValid } from 'src/validation';

@Controller('orphanages')
export class OrphanageController {

    constructor(private readonly service: OrphanageService) {}

    @Get()
    @UseInterceptors(OrphanagesViewInterceptor)
    public async index() {
        return await this.service.getList();
    }

    @Get(':id')
    @UseInterceptors(OrphanageViewInterceptor)
    public async show(@Param() params: any) {
        const id = Number(params.id);
        return await this.service.get(id);
    }

    @Post()
    @UseInterceptors(FilesInterceptor('photos'))
    @UsePipes(new ValidationPipe({ transform: true }))
    @UseInterceptors(OrphanageViewInterceptor)
    public async store(@Body() body: OrphanageValid, @UploadedFiles() photos: any[]) {
        if (photos && photos.length > 0) {
            body.photos = photos.map(file => ({ path: file.filename }));
        }
        return await this.service.create(body);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    public async destroy(@Param() params: any) {
        const id = Number(params.id);
        return await this.service.delete(id);
    }

}