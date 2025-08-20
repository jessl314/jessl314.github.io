import mongoose, { Schema, Document } from 'mongoose';

export interface IEducation {
    school: string;
    degree: string;
    minor: string;
    startYear: number;
    endYear: string;
}

export interface IAbout extends Document {
    content: string;
    profileImage: string;
    education: IEducation[];
    updatedAt: Date;
}

// education
const educationSchema = new Schema<IEducation>({
    school: String,
    degree: String,
    minor: String,
    startYear: Number,
    endYear: String
}, {_id: false}); // Prevents automatic _id generation for subdoc

// about me bio + profile image
const aboutSchema = new Schema<IAbout>({
    content: String,
    profileImage: String,
    education: [educationSchema],
    updatedAt: {type: Date, default: Date.now}
});

export default mongoose.model<IAbout>('About', aboutSchema);
