import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class File {
  @Prop()
  name: string;

  @Prop()
  fileName: string;
}

export const FileSchema = SchemaFactory.createForClass(File);
