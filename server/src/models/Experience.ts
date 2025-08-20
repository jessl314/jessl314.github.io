import mongoose, { Schema, Document } from 'mongoose';

export interface IExperience extends Document {
    role: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
    skills: string[];
    type: 'Technical' | 'Additional';
    updatedAt: Date;
}

const experienceSchema = new Schema<IExperience>({
    role: String,
    company: String,
    location: String,
    startDate: String,
    endDate: String,
    description: [String],
    skills: [String],
    type: {
        type: String,
        enum: ['Technical', 'Additional'],
        default: 'Technical'
    },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model<IExperience>('Experience', experienceSchema);
