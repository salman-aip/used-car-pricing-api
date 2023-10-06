import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './entities/report.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report) private readonly repository: Repository<Report>,
  ) {}

  create(createReportDto: CreateReportDto) {
    const report = this.repository.create(createReportDto);
    return this.repository.save(report);
  }

  findAll() {
    return this.repository.find({
      select: {
        id: true,
        price: true,
      },
    });
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  async update(id: number, updateReportDto: UpdateReportDto) {
    const report = await this.findOne(id);

    if (!report) {
      throw new Error('user not found');
    }

    Object.assign(report, updateReportDto);
    return this.repository.save(report);
  }

  async remove(id: number) {
    const report = await this.findOne(id);

    if (!report) {
      throw new Error('report not found');
    }

    return this.repository.remove(report);
  }
}
