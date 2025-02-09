import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async createStudent(data: Partial<Student>): Promise<Student> {
    return this.studentRepository.save(data);
  }

  async findAllStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }
}
