import AnimationScroll from "../../animation/AnimationScroll";
import { Typography } from "./Typography";

/**
 * Wrapper for all section, with the title and layout.
 *
 * @param children Children of the section
 * @param title Title of the section
 * @returns {JSX.Element}
 * @constructor
 */
export const SectionWrapper = ({ children, title }) => {
  return (
    <div className="flex flex-col items-center gap-12">
      <AnimationScroll delayAnim={0.1}>
        <Typography variant="h2">{title}</Typography>
      </AnimationScroll>

      {children}
    </div>
  );
};
