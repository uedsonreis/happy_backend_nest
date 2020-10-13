import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Orphanage } from "./orphanage.entity";

@Entity({ name: 'photos' })
export class Photo {

    @PrimaryGeneratedColumn()
    public id?: number;
    
    @Column()
    public path: string;
 
    @ManyToOne(() => Orphanage, orphanage => orphanage.photos)
    @JoinColumn({ name: 'orphanage_id' })
    public orphanage?: Orphanage;
}