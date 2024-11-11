import Blog from "../model/blog.js";
import User from "../model/user.js";

export const createblog = async (req, res) => {
    try {
        const { title, description, link, category } = req.body;
        const userId = req.user.userId;
        const user=await User.findById(userId);
        const author_mail=user.email;
        const blog = new Blog({ title, description, link, author_mail, category });
        await blog.save();
        res.status(201).json(blog);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const getblog = async (req, res) => {
    const category = req.params.activecategory;
    const blogs = await Blog.find({ category: category });
    res.status(200).json(blogs);
}