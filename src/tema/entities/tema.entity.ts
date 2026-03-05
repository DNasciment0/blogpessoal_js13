import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty, Length } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Postagem } from '../../postagem/entities/postagem.entity';

@Entity({ name: 'tb_temas' })
export class Tema {
  @PrimaryGeneratedColumn()
  id: number;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty({ message: 'A descrição é obrigatória' })
  @Length(5, 255, { message: 'A descrição deve ter entre 5 e 255 caracteres' })
  @Column({ length: 255, nullable: false })
  descricao: string;

  @OneToMany( () => Postagem, (postagem) => postagem.tema)
  postagem: Postagem[];
}
