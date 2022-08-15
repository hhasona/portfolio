import React from "react"

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 flex justify-center items-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello! I am Hassan. I have finished recently a Full Stack Bootcamp and
          looking for my first position as a Full Stack Developer. Technologies
          I learned is MERN(MongoDB, Express, ReactJS and NodeJS). I create
          responsive websites that are displayed on all devices desktops and
          smartphones. Of course, before I begin developing any webapp, Landing
          Page, Business Website or E-commerce, I need to have a ready-made
          project layout (sketch). I'm ready to learn more everyday and looking
          for improve and show my skills.
        </p>
      </div>
    </div>
  )
}

export default About
