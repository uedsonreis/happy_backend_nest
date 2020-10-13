import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orphanage } from './orphanage.entity';

@Injectable()
export class OrphanageService {

    constructor(@InjectRepository(Orphanage) private readonly repository: Repository<Orphanage>) {}

    public async getList(): Promise<Orphanage[]> {
        return await this.repository.find({ relations: ['photos'] });
    }

    public async get(id: number): Promise<Orphanage> {
        return await this.repository.findOne(id, { relations: ['photos'] });
    }

    public async create(orphanage: Orphanage): Promise<Orphanage> {
        return await this.repository.save(orphanage);
    }

    public async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }

}