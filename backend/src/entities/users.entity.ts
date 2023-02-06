import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";

import { Exclude } from "class-transformer";
import { ContactsUser } from "./contactsUser.entity";
import { Client } from "./client.entity";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ unique: true, length: 120 })
  email: string;

  @Column({ type: "varchar", length: 120 })
  @Exclude()
  password: string;

  @Column({ type: "varchar", length: 120 })
  name: string;

  @Column({ type: "varchar", length: 12 })
  phone: string;

  @CreateDateColumn()
  readonly created_at: Date;

  @OneToMany(() => Client, (client) => client.user, {
    eager: true,
  })
  client: Client[];

  @OneToMany(() => ContactsUser, (contact) => contact.user, {
    eager: true,
  })
  contacts: ContactsUser[];
}
