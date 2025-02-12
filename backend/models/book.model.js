import mongoose, { mongo } from "mongoose";

const bookSchema = new mongoose.Schema({
    title:String,
    author:String,
    category:String,
    price:Number,
    image:String
})

const Book = mongoose.model("Book", bookSchema)

export default Book