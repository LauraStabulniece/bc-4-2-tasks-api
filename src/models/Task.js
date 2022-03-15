import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    message: {
        type: String,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
   
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const task = mongoose.model('Tasks', taskSchema);

export default task;