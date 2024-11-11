import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author_mail: {
        type: String,
        required: true
    },
    link: {
        type: String,
    },
    category: {
        type: String,
        enum: ["Technology", "Entertainment", "Sports", "Health", "Business", "Science", "General"],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;