import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from '../entities/teacher.entity';
import { TeacherService } from '../services/teacher.service';
import { TeacherController } from '../controllers/teacher.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Teacher])],
  providers: [TeacherService],
  controllers: [TeacherController],
  exports: [TeacherService],
})
export class TeacherModule {}