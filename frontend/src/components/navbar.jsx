import { Menu, CircleUserRound, X, SquarePen } from "lucide-react";
import { useState, useEffect } from "react";
import CreateBlog from "./createblog";
import { useSelector } from "react-redux";
import MenuPopup from "./menu";  

const Navbar = () => {
  const [isCreateBlogOpen, setIsCreateBlogOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { authUser, userData } = useSelector((state) => state.auth);

  const toggleCreateBlog = () => {
    setIsCreateBlogOpen(!isCreateBlogOpen);
  };
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 bg-white border-b border-neutral-500">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <a href="/">
              <span className="text-2xl font-semibold tracking-tight text-custom-red ml-7">
                MindCanvas
              </span>
            </a>
          </div>

          <div className="hidden lg:flex justify-center mr-12 space-x-8 items-center">
            {authUser ? (
              <>
                <button
                  onClick={toggleCreateBlog}
                  className="text-custom-red hover:text-custom-dark-red"
                >
                  <SquarePen size={24} />
                </button>
                <div className="py-1 px-3 text-lg">
                  Hey, <span className="text-custom-red">{userData.name}</span>
                </div>
                <button onClick={togglePopup} className="py-2 px-3 border rounded-3xl hover:shadow-md">
                  <div className="flex items-center h-8">
                    <Menu className="mr-3" />
                    <CircleUserRound />
                  </div>
                </button>
              </>
            ) : (
              <button onClick={togglePopup} className="py-2 px-3 border rounded-3xl hover:shadow-md">
                <div className="flex items-center h-8">
                  <Menu className="mr-3" />
                  <CircleUserRound />
                </div>
              </button>
            )}
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={togglePopup} className="py-2 px-3 border rounded-3xl hover:shadow-md">
              <div className="flex items-center h-8">
                <Menu className="mr-3" />
                <CircleUserRound />
              </div>
            </button>
          </div>
        </div>

        {isCreateBlogOpen && <CreateBlog onClose={toggleCreateBlog} />}

        {isPopupOpen && (<MenuPopup isOpen={isPopupOpen} onClose={togglePopup} authUser={authUser} userData={userData} /> )}

         {authUser && (<button
        onClick={toggleCreateBlog}
        className="lg:hidden fixed bottom-5 right-3 py-3 px-5 bg-custom-red text-white rounded-full shadow-lg hover:bg-custom-dark-red z-50"
      >
        <SquarePen size={24} />
      </button>)}
      </div>
    </nav>
  );
};

export default Navbar;
