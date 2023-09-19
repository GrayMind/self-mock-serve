import { Injectable } from '@nestjs/common';
import { CreateMockDto } from './dto/create-mock.dto';
import { UpdateMockDto } from './dto/update-mock.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mock } from './entities/mock.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MockService {
  constructor(
    @InjectRepository(Mock)
    private mockRepository: Repository<Mock>,
  ) {}
  create(createMockDto: CreateMockDto) {
    return this.mockRepository.save(createMockDto);
  }

  findAll(projectId: number) {
    return this.mockRepository.find({ where: { projectId } });
  }

  findOne(id: number) {
    return this.mockRepository.findOne({ where: { id } });
  }

  async update(id: number, updateMockDto: UpdateMockDto) {
    const updateItem = await this.mockRepository.findOne({
      where: { id },
    });
    Object.keys(updateMockDto).forEach((key) => {
      if (updateMockDto.hasOwnProperty(key) && updateMockDto[key]) {
        updateItem[key] = updateMockDto[key];
      }
    });
    return this.mockRepository.save(updateItem);
  }

  async remove(id: number) {
    const removeItem = await this.mockRepository.findOne({
      where: { id },
    });
    return this.mockRepository.remove(removeItem);
  }
}
