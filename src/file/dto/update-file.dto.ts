import { PartialType } from '@nestjs/mapped-types';
import { UploadFileDto } from './create-file.dto';

export class UpdateFileDto extends PartialType(UploadFileDto) {}
