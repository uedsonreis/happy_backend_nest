import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602596806539 implements MigrationInterface {

    private readonly tableName = 'orphanages';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: this.tableName,
            columns: [
                { name: 'id', type: 'integer', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                { name: 'name', type: 'varchar' },
                { name: 'about', type: 'text' },
                { name: 'instructions', type: 'text' },
                { name: 'weekend', type: 'boolean', default: false },
                { name: 'visit_hour', type: 'varchar' },
                { name: 'whatsapp', type: 'varchar' },
                { name: 'latitude', type: 'decimal' },
                { name: 'longitude', type: 'decimal' },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName);
    }

}
