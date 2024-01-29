import AnimationScroll from "../../animation/AnimationScroll";
import { useFetch } from "../../hooks/useFetch";
import { getListOfUrlRepositoriesUrl } from "../../lib/api-url";
import { GITHUB_USERNAME } from "../../lib/config";
import { Loader } from "../atom/Loader";
import { SectionWrapper } from "../atom/SectionWrapper";
import { Typography } from "../atom/Typography";
import { Project } from "./Project";

export const ProjectSection = () => {
  const {
    data: projects,
    error,
    isLoading,
    isIdle,
    isRejected,
  } = useFetch(getListOfUrlRepositoriesUrl(GITHUB_USERNAME));

  if (isLoading || isIdle) {
    return <Loader />;
  }

  if (isRejected) {
    return (
      <Typography className="font-bold text-red-500">
        Sorry, there is an error : {error}
      </Typography>
    );
  }

  return (
    <SectionWrapper title="Projets">
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {projects?.map((project, index) => {
          const animDelay = (index + 1) / 15;

          return (
            <AnimationScroll key={project.name} delayAnim={animDelay}>
              <Project {...project} />
            </AnimationScroll>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
