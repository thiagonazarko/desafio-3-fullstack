import { Exclude } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./client.entity";
import { ContactsUser } from "./contactsUser.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  full_name: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Client, (client) => client.user, {
    eager: true,
  })
  client: Client[];

  @OneToMany(() => ContactsUser, (contact) => contact.user, {
    eager: true,
  })
  contacts: ContactsUser[];
}
