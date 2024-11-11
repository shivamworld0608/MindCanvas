import { useEffect } from 'react';
import Navbar from "../components/navbar";
import Blogs from "../components/blogs";
import Footer from "../components/footer";

const Blog = () => {
  useEffect(() => {
    // Prevent horizontal scrolling on the entire page
    document.body.style.overflowX = 'hidden';

    // Cleanup: reset overflow when component is unmounted
    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <>
      <div className="scrollbar-hide">
        <Navbar />
        <div className="mx-auto">
          <Blogs />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
