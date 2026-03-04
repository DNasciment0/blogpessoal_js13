import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./postagem/entities/postagem.entity";
import { PostagemService } from "./postagem/services/postagem.service";
import { PostagemController } from "./postagem/controllers/postagem.controller";

@Module({
    imports:[TypeOrmModule.forFeature([Postagem])],
    controllers:[PostagemController],
    providers:[PostagemService],
    exports:[]
})
export class PostagemModule{}