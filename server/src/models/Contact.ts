import mongoose, { Schema, Document } from 'mongoose';

export interface IContact extends Document {
    name: string;
    email: string;
    linkedin: string;
    githubLink: string;
    updatedAt: Date;
}

const contactSchema = new Schema<IContact>({
    name: String,
    email: String,
    linkedin: String,
    githubLink: String,
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model<IContact>('Contact', contactSchema);
