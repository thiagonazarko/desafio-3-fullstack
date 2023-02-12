import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";
import { User } from "./user.entity";

@Entity()
export class ContactsUser {
  @PrimaryGeneratedColumn("uuid")
  @Exclude()
  readonly id: string;

  @Column()
  email: string;

  @Column()
  telephone: string;

  @ManyToOne((type) => User, (user) => user.contacts, {
    onDelete: "CASCADE",
  })
  user: User;
}
