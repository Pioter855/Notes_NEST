import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Notes } from "../database/database.entity";
import { NotesController } from "./notes.controller";
import { NotesService } from "./notes.service";


@Module({
    imports: [TypeOrmModule.forFeature([Notes])],
    controllers:[NotesController],
    providers: [ NotesService]
})
export class NotesModule {}