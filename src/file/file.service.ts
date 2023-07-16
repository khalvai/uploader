import { Injectable } from '@nestjs/common';
import { UploadFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { InjectModel } from '@nestjs/mongoose';
import { File } from './entities/file.entity';
import { Model } from 'mongoose';
import { FileDocument } from './interfaces/file.interface';

@Injectable()
export class FileService {
  constructor(@InjectModel('files') private fileModel: Model<File>) {}

  async save(uploadFileDto: UploadFileDto) {
    return await this.fileModel.create({
      fileName: uploadFileDto.fileName,
      name: uploadFileDto.name,
    });
  }

  findAll() {
    return `This action returns all file`;
  }

  async findOne(id: string): Promise<FileDocument> {
    return await this.fileModel.findById(id);
  }

  update(id: number, updateFileDto: UpdateFileDto) {
    return `This action updates a #${id} file`;
  }

  remove(id: number) {
    return `This action removes a #${id} file`;
  }
}
