import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategory1670256055816 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"categorias",
                columns:[
                {
                    name:"id",
                    type:"uuid",
                    isPrimary:true,
                },
                {
                    name:"name",
                    type:"varchar",
                },
                {
                    name:"descricao",
                    type:"varchar",
                },
                {
                    name:"create_at",
                    type:"timestamp",
                    default:"now()",
                },
                ],
            })
        );
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {4
        await queryRunner.dropTable("categorias");
    }

}
