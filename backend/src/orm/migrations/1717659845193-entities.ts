import { MigrationInterface, QueryRunner } from "typeorm";

export class Entities1717659845193 implements MigrationInterface {
    name = 'Entities1717659845193'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`appartements\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`addresse\` varchar(255) NOT NULL, \`frais_menage\` int NOT NULL, \`status\` int NOT NULL DEFAULT '0', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`user_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`checkins\` DROP COLUMN \`frais_menage\``);
        await queryRunner.query(`ALTER TABLE \`checkins\` ADD \`nom_client\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`checkins\` ADD \`date_debut\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`checkins\` ADD \`nombre_nuits\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`checkins\` ADD \`prix_total\` int NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`checkins\` ADD \`prix_nuit\` int NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`checkins\` ADD \`appartement_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`checkins\` DROP FOREIGN KEY \`FK_4bee1e59fa58838948f443e531f\``);
        await queryRunner.query(`ALTER TABLE \`checkins\` CHANGE \`commission\` \`commission\` int NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`checkins\` CHANGE \`user_id\` \`user_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`social_id\` \`social_id\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`token\` \`token\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`appartements\` ADD CONSTRAINT \`FK_770f441ee3e089bb155e65d9b7f\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`checkins\` ADD CONSTRAINT \`FK_4bee1e59fa58838948f443e531f\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`checkins\` ADD CONSTRAINT \`FK_889ff4df0cefd47699e01e23997\` FOREIGN KEY (\`appartement_id\`) REFERENCES \`appartements\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`checkins\` DROP FOREIGN KEY \`FK_889ff4df0cefd47699e01e23997\``);
        await queryRunner.query(`ALTER TABLE \`checkins\` DROP FOREIGN KEY \`FK_4bee1e59fa58838948f443e531f\``);
        await queryRunner.query(`ALTER TABLE \`appartements\` DROP FOREIGN KEY \`FK_770f441ee3e089bb155e65d9b7f\``);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`token\` \`token\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`social_id\` \`social_id\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`checkins\` CHANGE \`user_id\` \`user_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`checkins\` CHANGE \`commission\` \`commission\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`checkins\` ADD CONSTRAINT \`FK_4bee1e59fa58838948f443e531f\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`checkins\` DROP COLUMN \`appartement_id\``);
        await queryRunner.query(`ALTER TABLE \`checkins\` DROP COLUMN \`prix_nuit\``);
        await queryRunner.query(`ALTER TABLE \`checkins\` DROP COLUMN \`prix_total\``);
        await queryRunner.query(`ALTER TABLE \`checkins\` DROP COLUMN \`nombre_nuits\``);
        await queryRunner.query(`ALTER TABLE \`checkins\` DROP COLUMN \`date_debut\``);
        await queryRunner.query(`ALTER TABLE \`checkins\` DROP COLUMN \`nom_client\``);
        await queryRunner.query(`ALTER TABLE \`checkins\` ADD \`frais_menage\` int NOT NULL DEFAULT '0'`);
        await queryRunner.query(`DROP TABLE \`appartements\``);
    }

}
