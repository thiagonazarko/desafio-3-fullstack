import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";
import { Client } from "./client.entity";

@Entity()
export class ContactsClient {
  @PrimaryGeneratedColumn("uuid")
  @Exclude()
  readonly id: string;

  @Column()
  email: string;

  @Column()
  telephone: string;

  @ManyToOne(() => Client, (client) => client.contact, {
    onDelete: "CASCADE",
  })
  client: Client;
}
