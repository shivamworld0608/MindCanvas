import Navbar from "../components/navbar";
import Blogs from "../components/blogs";
import Footer from "../components/footer";


const Blog = () => {
  return (
    <>
       <Navbar />
      <div className=" mx-auto ">
        <Blogs />
      </div>
        <Footer />
    </>
  );
};

export default Blog;
