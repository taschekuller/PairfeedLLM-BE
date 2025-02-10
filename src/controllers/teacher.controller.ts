import { Controller, Get, Post, Body } from '@nestjs/common';
import { TeacherService } from '../services/teacher.service';
import { Teacher } from '../entities/teacher.entity';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  create(@Body() data: Partial<Teacher>) {
    return this.teacherService.createTeacher(data);
  }

  @Get()
  findAll() {
    return this.teacherService.findAllTeachers();
  }
}