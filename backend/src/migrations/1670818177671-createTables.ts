import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1670818177671 implements MigrationInterface {
    name = 'createTables1670818177671'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contacts_client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "telephone" character varying NOT NULL, "clientId" uuid, CONSTRAINT "PK_72d1013c43a0198e905290831e5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contacts_user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "telephone" character varying NOT NULL, "userId" uuid, CONSTRAINT "PK_af0a71ac1879b584f255c49c99a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "password" character varying NOT NULL, "full_name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "full_name" character varying NOT NULL, "userId" uuid, CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contacts_client" ADD CONSTRAINT "FK_18bfbf998108cc541afaa99c03e" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contacts_user" ADD CONSTRAINT "FK_9e77b902e563afcd15772103219" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "FK_ad3b4bf8dd18a1d467c5c0fc13a" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "FK_ad3b4bf8dd18a1d467c5c0fc13a"`);
        await queryRunner.query(`ALTER TABLE "contacts_user" DROP CONSTRAINT "FK_9e77b902e563afcd15772103219"`);
        await queryRunner.query(`ALTER TABLE "contacts_client" DROP CONSTRAINT "FK_18bfbf998108cc541afaa99c03e"`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "contacts_user"`);
        await queryRunner.query(`DROP TABLE "contacts_client"`);
    }

}
