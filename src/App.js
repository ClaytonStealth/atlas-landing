import TopBar from "./components/TopBar";
import Jaya from "./assets/Jaya.png";
import Magma from "./assets/Magma.png";
import ogFootwear from "./assets/ogFootwear.png";
import t3 from "./assets/t3.png";
import Tomahawk from "./assets/Tomahawk.png";
import Partners from "./assets/Partners.png";
import { FaXTwitter, FaInstagram, FaChevronDown } from "react-icons/fa6";
import atlasWhite from "./assets/atlas-white-nobg.png";

function App() {
  return (
    <>
      <TopBar />
      <div className="custom-landing-page bg-transparent min-h-screen">
        <div className="bg-black min-h-screen">
          <section  className="custom-section h-screen flex flex-col justify-center items-center">
            <div className=" flex flex-col justify-center items-center container mx-auto text-white">
              <h1 className="text-4xl font-bold text-center mb-4">
                Its not easy, <br /> its hard work.
              </h1>
              <p className="text-xl text-center ">
                Start your journey towards <br /> Empowerment
              </p>
              <img id="logo" src={atlasWhite} alt="Atlas" className="" />
              <div className="group flex flex-col justify-center items-center mt-4 cursor-pointer">
                <p className=" text-xs">Learn More</p>
                <FaChevronDown className=" group-hover:translate-y-1 duration-300" />
              </div>
            </div>
          </section>
          <section className="custom-section py-20">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4 text-white">
                Create Stunning Images with AI
              </h2>
              <p className="text-lg text-white text-center mb-8">
                CreateA.Img is an AI-driven image generation tool that can help
                you create professional-quality photos and marketing materials.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className=" p-8 rounded shadow-md">
                  <h3 className="text-white text-center mb-4">Fast</h3>
                  <p className="text-lg text-white text-center mb-4">
                    Our AI algorithms work quickly to generate high-quality
                    images in no time.
                  </p>
                  <img
                    src="https://source.unsplash.com/featured/?fast"
                    alt="Fast"
                    className="mx-auto h-20"
                  />
                </div>
                <div className=" p-8 rounded shadow-md">
                  <h3 className="text-white text-center mb-4">Easy</h3>
                  <p className="text-lg text-white text-center mb-4">
                    CreateA.Img is easy to use and requires no technical
                    expertise.
                  </p>
                  <img
                    src="https://source.unsplash.com/featured/?easy"
                    alt="Easy"
                    className="mx-auto h-20"
                  />
                </div>
                <div className=" p-8 rounded shadow-md">
                  <h3 className="text-white text-center mb-4">Affordable</h3>
                  <p className="text-lg text-white text-center mb-4">
                    Our pricing plans are flexible and affordable, making it
                    easy to use our tool without breaking the bank.
                  </p>
                  <img
                    src="https://source.unsplash.com/featured/?affordable"
                    alt="Affordable"
                    className="mx-auto h-20"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="custom-section py-20">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4 text-white">
                Features of CreateA.Img
              </h2>
              <p className="text-lg text-white text-center mb-8">
                CreateA.Img comes with a range of features that can help you
                create stunning images.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className=" p-8 rounded shadow-md">
                  <h3 className="text-white text-center mb-4">Image Filters</h3>
                  <p className="text-lg text-white text-center mb-4">
                    CreateA.Img comes with a range of image filters that can
                    help you enhance your photos and create stunning effects.
                  </p>
                  <img
                    src="https://source.unsplash.com/featured/?filters"
                    alt="Filters"
                    className="mx-auto h-20"
                  />
                </div>
                <div className=" p-8 rounded shadow-md">
                  <h3 className="text-white text-center mb-4">
                    Image Manipulation
                  </h3>
                  <p className="text-lg text-white text-center mb-4">
                    CreateA.Img allows you to manipulate your images in a
                    variety of ways, including cropping, resizing, and more.
                  </p>
                  <img
                    src="https://source.unsplash.com/featured/?manipulation"
                    alt="Manipulation"
                    className="mx-auto h-20"
                  />
                </div>
                <div className=" p-8 rounded shadow-md">
                  <h3 className="text-white text-center mb-4">
                    Image Generation
                  </h3>
                  <p className="text-lg text-white text-center mb-4">
                    CreateA.Img uses AI algorithms to generate high-quality
                    images based on your inputs and preferences.
                  </p>
                  <img
                    src="https://source.unsplash.com/featured/?generation"
                    alt="Generation"
                    className="mx-auto h-20"
                  />
                </div>
                <div className=" p-8 rounded shadow-md">
                  <h3 className="text-white text-center mb-4">Customization</h3>
                  <p className="text-lg text-white text-center mb-4">
                    CreateA.Img allows you to customize your images by adjusting
                    various settings and parameters.
                  </p>
                  <img
                    src="https://source.unsplash.com/featured/?customization"
                    alt="Customization"
                    className="mx-auto h-20"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="custom-section py-20 bg-white">
            <div className="container mx-auto">
              <img src={Partners} alt="Partners" className="ml-8 mb-8" />

              <div className="flex justify-around">
                <img src={Jaya} alt="Jaya" className=" rounded-lg" />
                <img src={Magma} alt="Magma" className="h-20 w-24 rounded-lg" />
                <img
                  src={ogFootwear}
                  alt="ogFootwear"
                  className="h-20 w-24 rounded-lg"
                />
                <img src={t3} alt="t3" className="h-20 w-24 rounded-lg" />
                <img
                  src={Tomahawk}
                  alt="Tomahawk"
                  className="h-20 w-20 rounded-lg"
                />
              </div>
            </div>
          </section>
          <footer className=" text-white py-8">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                <div className="text-center">
                  <h2 className="text-xl  font-bold mb-4">Atlas</h2>
                  <ul className="space-y-2">
                    <li className="">Home</li>

                    <li className="">
                      Road To <p className="">Empowerment</p>
                    </li>
                    <li className="">
                      The
                      <p className="">Marketplace</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-center mb-4">
                    Athletes
                  </h2>
                  <ul className="space-y-2 text-center">
                    <li>Become a Partner</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-4 text-center">About</h2>
                  <ul className="space-y-2 text-center">
                    <li>
                      <a href="#" className="hover:text-indigo-400">
                        Jobs
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-indigo-400">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex">
                  <FaXTwitter className="text-3xl text-white mx-2" />
                  <FaInstagram className="text-3xl text-white mx-2" />
                </div>
              </div>
              <hr className="my-8 border-t border-slate-700" />
              <div className="text-center">
                <p className="text-sm">
                  &copy; 2024 Atlas Sports, LLC. New York. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
