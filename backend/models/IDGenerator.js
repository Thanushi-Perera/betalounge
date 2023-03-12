import mongoose from "mongoose";

const IDSchema = new mongoose.Schema({
    id: {type: String, required: true},
    index: {type: Number, default: 1},
});

export const IDGenerator = mongoose.model("IDGenerator", IDSchema);