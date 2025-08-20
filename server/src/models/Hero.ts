import mongoose, { Schema, Document } from 'mongoose';

export interface IHero extends Document {
    animated: string;
    elevPitch: string;
}

const heroSchema = new Schema<IHero>({
    animated: String,
    elevPitch: String
});

export default mongoose.model<IHero>('Hero', heroSchema);
