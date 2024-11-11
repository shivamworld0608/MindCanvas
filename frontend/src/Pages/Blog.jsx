import Navbar from "../components/navbar";
import Blogs from "../components/blogs";
import Footer from "../components/footer";


const Blog = () => {
  return (
    <>
    <div className="overflow-hidden ">
       <Navbar />
      <div className=" mx-auto ">
        <Blogs />
      </div>
        <Footer />
        </div>
    </>
  );
};

export default Blog;
