import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { Photo } from "./photo.entity";

@Entity({ name: 'orphanages' })
export class Orphanage {

    @PrimaryGeneratedColumn()
    public id?: number;
    
    @Column()
    public name!: string;
    
    @Column()
    public about!: string;
    
    @Column()
    public whatsapp!: string;

    @Column()
    public instructions!: string;
    
    @Column({ name: 'visit_hour' })
    public visitHour!: string;
    
    @Column({ default: false })
    public weekend!: boolean;

    @Column()
    public latitude!: number;

    @Column()
    public longitude!: number;

    @OneToMany(() => Photo, photo => photo.orphanage, {cascade: ['insert', 'update']})
    @JoinColumn({ name: 'orphanage_id' })
    public photos!: Photo[]

}