import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
    title: string;
    description: string;
    techStack: string[];
    githubLink: string;
    demoLink: string;
    startDate: string;
    endDate: string;
    updatedAt: Date;
}

const projectSchema = new Schema<IProject>({
    title: String,
    description: String,
    techStack: [String],
    githubLink: String,
    demoLink: String,
    startDate: String,
    endDate: String,
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model<IProject>('Projects', projectSchema);
