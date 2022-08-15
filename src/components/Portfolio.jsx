import React from "react"
import Veiculo from "../assets/portfolio/Veiculo.png"
import PortfolioProject from "../assets/portfolio/portfolio.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Veiculo,
      demo: "https://vehiculo-app.herokuapp.com/",
      github: "https://github.com/hhasona/CarBnb",
    },
    {
      id: 2,
      src: PortfolioProject,
      demo: "https://hassouna.github.io/portfolio/",
      github: "https://github.com/hhasona/portfolio",
    },
  ]

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-screen"
    >
      <div className="container p-4 mx-auto flex flex-col items-center justify-center w-full h-full">
        <div className="pb-8 flex flex-col w-full justify-center items-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, github }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
