import React from "react"
import HeroImg from "../assets/myhero.jpeg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-scroll"
function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="container mx-auto flex flex-col items-center h-full px-10 md:flex-row">
        <div className="flex flex-col justify-center md:h-full h-3/5">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm a junior full stack developer with a passion for creating
            beautiful and user-friendly websites. I'm independent and I'm always
            looking for new challenges to learn and grow. My current focus is on
            React and Node.js.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImg}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-2/4"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
