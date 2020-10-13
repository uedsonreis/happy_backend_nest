import { getRepository, MigrationInterface, QueryRunner } from "typeorm";

import { Orphanage } from "src/orphanage/orphanage.entity";

export class seedOrphanages1602598735116 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const repository = getRepository(Orphanage, queryRunner.connection.name);

        const orphanages: Orphanage[] = [{
            name: 'Orfanato Esperança',
            whatsapp: '71 999.888.777', visitHour: 'Das 8h as 18h',
            latitude: -12.9892352, longitude: -38.44386, weekend: false,
            instructions: 'Venha como se sentir a vontade e traga muito amor e paciência para dar.',
            photos: [ { path: 'https://oimparcial.com.br/app/uploads/2019/09/ilustracao-em-vetor-de-criancas-brincando_29937-2012.jpg' }],
            about: 'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.'
        }, {
            name: 'Balão Mágico',
            whatsapp: '71 988.765.432', visitHour: 'Das 9h as 17h',
            latitude: -12.9892360, longitude: -38.44380, weekend: true,
            instructions: 'Não venha com trajes de banho, e traga disposição e brinquedos.',
            photos: [{ path: 'http://www.sinmgra.com.br/wp-content/uploads/2018/09/Festa-Crian%C3%A7as.jpg' }],
            about: 'Presta assistência a crianças de 0 a 12 anos que se encontrem em situação vulnerabilidade social.'
        }];
        
        for (let orph of orphanages) {
            await repository.save(orph);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}

}
