import { Controller, Get, Post, Body } from '@nestjs/common';
import { StudentService } from '../services/student.service';
import { Student } from '../entities/student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  create(@Body() data: Partial<Student>) {
    return this.studentService.createStudent(data);
  }

  @Get()
  findAll() {
    return this.studentService.findAllStudents();
  }
}
