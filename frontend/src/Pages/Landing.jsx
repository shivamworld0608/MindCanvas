import Navbar from "../components/navbar";
import HeroSection from "../components/Herosection";
import Footer from "../components/footer";


const Login = () => {
  return (
    <>
       <Navbar />
      <div className="max-w-7xl mx-auto pt-24 px-6">
        <HeroSection/>
      </div>
      <div className="mt-36">
        <Footer />
    </div>
    </>
  );
};

export default Login;
