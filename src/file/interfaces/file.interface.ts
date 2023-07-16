import { Document } from 'mongoose';

export interface FileDocument extends Document {
  readonly fileName: string;
  readonly name: string;
}
