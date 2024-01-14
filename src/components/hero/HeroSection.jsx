import { useContext } from "react";
import { FULL_NAME } from "../../lib/config";
import { ThemeContext } from "../../context/ThemeProvider";

export const HeroSection = () => {
  const { isLight } = useContext(ThemeContext);

  return (
    <div className="margin-auto relative flex flex-col items-center ">
      <img
        width={300}
        height={300}
        src={
          isLight
            ? "/images/photoProfil.jpg"
            : "/images/photosProfilCouleur.png"
        }
        alt="avatar"
        className=" right-0 z-0 rounded shadow-lg sm:absolute "
      />
      {/* Hero - Exercise*/}
      <div className="z-10">
        {/* Hero - Exercise*/}
        <h1 className="text-6xl drop-shadow-[0_0px_20px_rgba(0,0,0,0.25)] md:text-8xl">
          I'm{""}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-extrabold text-transparent">
            {FULL_NAME}
          </span>
        </h1>
        <p className=" relative max-w-xl text-xl">
          <b>Apprenti React.</b> Je suis un développeur web junior passionné par
          React.js. Issu d'une reconversion, je me spécialise dans la création
          d'interfaces modernes et interactives. Toujours avide d'apprendre, je
          cherche à contribuer à des projets innovants et à élargir mes
          compétences en développement web.
        </p>
      </div>
    </div>
  );
};
