import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPhotos1602601538224 implements MigrationInterface {

    private readonly tableName = 'photos';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: this.tableName,
            columns: [
                { name: 'id', type: 'integer', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                { name: 'path', type: 'varchar' },
                { name: 'orphanage_id', type: 'integer' }
            ],
            foreignKeys: [{
                name: 'fk_photo_orphanage', referencedTableName: 'orphanages',
                referencedColumnNames: ['id'], columnNames: ['orphanage_id'],
                onUpdate: 'CASCADE', onDelete: 'CASCADE'
            }]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName);
    }

}
