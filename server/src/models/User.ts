import mongoose, { Schema, Document } from 'mongoose';


export interface IUser extends Document {
    username: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
};

const userSchema = new Schema<IUser>({
    username: String,
    password: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model<IUser>('User', userSchema)