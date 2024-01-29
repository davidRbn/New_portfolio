import { IoLogoReact } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import { FaGithub, FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiExpress, SiTypescript } from "react-icons/si";
import clsx from "clsx";
import AnimationScroll from "../../animation/AnimationScroll";

const Skills = () => {
  const listSkills = [
    {
      logo: <FaHtml5 color="orange" size={50} />,
      name: "Html",
    },
    {
      logo: <FaCss3Alt color="blue" />,
      name: "Css",
    },
    {
      logo: <SiTypescript color="#007acc" />,
      name: "Typescript",
    },
    {
      logo: <IoLogoReact color="#61DBFB" />,
      name: "React",
    },
    {
      logo: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      logo: <SiExpress />,
      name: "Express",
    },
    {
      logo: <FaGithub />,
      name: "Git & github",
    },
  ];

  return (
    <div className="mt-40">
      <h2
        className={clsx(
          "mb-10 text-center text-3xl md:text-4xl",
          "text-skin-primary"
        )}
      >
        Compétences
      </h2>

      <IconContext.Provider
        value={{
          style: {
            verticalAlign: "middle",
            margin: "auto",
            height: "30px",
          },
        }}
      >
        <ul className="flex flex-row flex-wrap justify-around gap-12 text-center">
          {listSkills.map((e, index) => {
            const animDelay = (index + 1) / 20;
            return (
              <AnimationScroll key={index} delayAnim={animDelay}>
                <li className=" w-50 flex flex-col gap-4 rounded-2xl bg-paper p-4 transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 md:w-40 md:p-8">
                  <h3>{e.logo}</h3>
                  <p className="text-lg">{e.name}</p>
                </li>
              </AnimationScroll>
            );
          })}
        </ul>
      </IconContext.Provider>
    </div>
  );
};

export default Skills;
