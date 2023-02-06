import { Exclude } from "class-transformer";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

import { User } from "./users.entity";

@Entity("contacts")
export class ContactsUser {
  @PrimaryGeneratedColumn("uuid")
  @Exclude()
  readonly id: string;

  @Column()
  email: string;

  @Column({ type: "varchar", length: 50 })
  name: string;

  @Column({ type: "varchar", length: 20 })
  phone: string;

  @ManyToOne(() => User, (user) => user.contacts, {
    onDelete: "CASCADE",
  })
  user: User;
}
