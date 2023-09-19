import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  create(createProjectDto: CreateProjectDto) {
    return this.projectRepository.save(createProjectDto);
  }

  findAll() {
    return this.projectRepository.find();
  }

  findOne(id: number) {
    return this.projectRepository.findOne({ where: { id } });
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    const updateProject = await this.projectRepository.findOne({
      where: { id },
    });
    if (updateProjectDto.projectName) {
      updateProject.projectName = updateProjectDto.projectName;
    }
    if (updateProjectDto.description) {
      updateProject.description = updateProjectDto.description;
    }
    if (updateProjectDto.prefix) {
      updateProject.prefix = updateProjectDto.prefix;
    }
    return this.projectRepository.save(updateProject);
  }

  async remove(id: number) {
    const removeProject = await this.projectRepository.findOne({
      where: { id },
    });
    return this.projectRepository.remove(removeProject);
  }
}
