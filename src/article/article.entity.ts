import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryColumn({ length: 40 })
  slug: string;

  @Column({ length: 40 })
  title?: string;

  @Column({ length: 100, nullable: true })
  description: string;

  @Column({ type: 'text' })
  body: string;
}
