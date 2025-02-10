import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from '../entities/teacher.entity';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,
  ) {}

  async createTeacher(data: Partial<Teacher>): Promise<Teacher> {
    return this.teacherRepository.save(data);
  }

  async findAllTeachers(): Promise<Teacher[]> {
    return this.teacherRepository.find();
  }
}