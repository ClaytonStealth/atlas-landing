import TopBar from "./components/TopBar";
import Jaya from "./assets/Jaya.png";
import Magma from "./assets/Magma.png";
import ogFootwear from "./assets/ogFootwear.png";
import t3 from "./assets/t3.png";
import Tomahawk from "./assets/Tomahawk.png";
import Partners from "./assets/Partners.png";
import { FaXTwitter, FaInstagram, FaChevronDown } from "react-icons/fa6";
import atlasWhite from "./assets/atlas-white-nobg.png";
import basketballGuy from "./assets/basketballGuy.png";
import footballGuy from "./assets/footballGuy.png";
import girlWhiteTop from "./assets/girlWhiteTop.png";
import { Link } from "react-scroll";
import femalePose from "./assets/femalePose.png";
import contractPose from "./assets/contractPose.png";
import bBallPose from "./assets/bBallPose.png";
import fBallPose from "./assets/fBallPose.png";
import dunk from "./assets/dunk.png";

function App() {
  return (
    <>
      <TopBar />
      <div className="bg-transparent ">
        <div className="bg-black">
          <section
            name="one"
            className="custom-section min-h-screen flex flex-col justify-center items-center"
          >
            <div className=" flex flex-col justify-center items-center container mx-auto text-white">
              <h1 className="text-4xl font-bold text-center mb-4">
                Its not easy, <br /> its hard work.
              </h1>
              <p className="text-xl text-center ">
                Start your journey towards <br /> Empowerment
              </p>
              <img
                id="logo"
                src={atlasWhite}
                alt="Atlas"
                className="w-[500px]"
              />
              <Link to="two" smooth={true} duration={1000}>
                <div className="group flex flex-col justify-center items-center mt-4 cursor-pointer">
                  <p className=" text-xs">Learn More</p>
                  <FaChevronDown className=" group-hover:translate-y-1 duration-300" />
                </div>
              </Link>
            </div>
          </section>
          <section
            name="two"
            className="min-h-screen min-w-full flex flex-col justify-center items-center"
          >
            <div className="container mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-white">
                The Road to
                <br /> Empowerment.
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className=" rounded mx-auto flex flex-col justify-center items-center">
                  <h3 className="text-white text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
                    The Start.
                  </h3>
                  <p className="text-white text-sm sm:text-base md:text-lg text-left">
                    Atlas Sports prepares athletes for collegiate athletics,
                    offering support and empowering them to build their personal
                    brand for future opportunities.
                  </p>
                </div>
                <div className="rounded">
                  <img
                    src={footballGuy}
                    alt="Start"
                    className="mx-auto w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
                  />
                </div>
                <div className=" rounded flex flex-col justify-center items-center">
                  <h3 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-left mb-4">
                    The Branding.
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-white text-left">
                    Tailored branding for you. Personalization and authenticity
                    are crucial. We empower athletes to control their careers.
                  </p>
                </div>
                <div className="rounded">
                  <img
                    src={girlWhiteTop}
                    alt="Branding"
                    className="mx-auto w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
                  />
                </div>
                <div className="rounded flex flex-col justify-center items-center">
                  <h3 className="text-white text-5xl text-left mb-4">
                    The Vision.
                  </h3>
                  <p className="text-lg text-white text-left">
                    Empowering athletes to shape their own futures through
                    personalized branding and authentic self-expression.
                  </p>
                </div>
                <div className="rounded">
                  <img
                    src={basketballGuy}
                    alt="Vision"
                    className="mx-auto w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
                  />
                </div>
              </div>
              <Link to="three" smooth={true} duration={1000}>
                <div className="group flex text-white flex-col justify-center items-center mt-4 cursor-pointer">
                  <p className=" text-xs">Learn More</p>
                  <FaChevronDown className=" group-hover:translate-y-1 duration-300" />
                </div>
              </Link>
            </div>
          </section>
          <section name="three" className=" py-20 min-h-screen">
            <div className="container mx-auto">
              <div className="flex flex-col sm:flex-row w-full">
                <img src={femalePose} alt="" className="w-[300px] h-[400px]" />
                <img
                  src={contractPose}
                  alt=""
                  className="w-[300px] h-[400px]"
                />
                <img src={bBallPose} alt="" className="w-[300px] h-[400px]" />
                <img src={fBallPose} alt="" className="w-[300px] h-[400px]" />
                <img src={dunk} alt="" className="w-[300px] h-[400px]" />
              </div>
              <div className="flex flex-col justify-start items-center pb-10">
                <div className="flex">
                  <h3 className="text-white text-xl italic">The</h3>
                  <h1 className="text-white text-4xl">Marketplace</h1>
                </div>
                <h2 className="text-white text-3xl">The Future Of Atlas.</h2>
              </div>
              <div className="flex gap-x-4 justify-center">
                <div className="p-4 rounded shadow-md text-white bg-[#373737] flex flex-col justify-start">
                  <h2>Birthday shoutouts</h2>
                  <p>Unique and memorable gifts</p>
                </div>
                <div className="p-4 rounded shadow-md text-white bg-[#373737] flex flex-col justify-start">
                  <h2>Endorsements</h2>
                  <p>Launch a new product</p>
                </div>

                <div className="p-4 rounded shadow-md text-white bg-[#373737] flex flex-col justify-start">
                  <h2>Autographs</h2>
                  <p>Add to your collection</p>
                </div>
                <div className="p-4 rounded shadow-md text-white bg-[#373737] flex flex-col justify-start">
                  <h2>Appearances</h2>
                  <p>Promote your local event</p>
                </div>
                <div className="p-4 rounded shadow-md text-white bg-[#373737] flex flex-col justify-start">
                  <h2>Encouragement videos</h2>
                  <p>Celebrate a recent achievement</p>
                </div>
              </div>
            </div>
            <Link to="four" smooth={true} duration={1000}>
              <div className="group text-white flex flex-col justify-center items-center mt-4 cursor-pointer">
                <p className=" text-xs">Learn More</p>
                <FaChevronDown className=" group-hover:translate-y-1 duration-300" />
              </div>
            </Link>
          </section>
          <section name="four" className="custom-section py-20 bg-white">
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
