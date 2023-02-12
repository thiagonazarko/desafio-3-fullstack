import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ContactsClient } from "./contactsClient.entity";
import { User } from "./user.entity";

@Entity()
export class Client {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  full_name: string;

  @ManyToOne((type) => User, (user) => user.client, {
    onDelete: "CASCADE",
  })
  user: User;

  @OneToMany(() => ContactsClient, (contact) => contact.client, {
    eager: true,
  })
  contact: ContactsClient[];
}
