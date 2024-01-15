import AnimationScroll from "../animation/AnimationScroll";
import { EMAIL, SOCIAL_NETWORKS } from "../lib/config";
import { SocialNetworks } from "./atom/SocialNetwork";
import { Typography } from "./atom/Typography";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-8 p-4 md:p-8 ">
      <AnimationScroll delayAnim={0.1}>
        <Typography variant="h2">Contactez-moi !</Typography>
      </AnimationScroll>
      <div className="flex flex-col items-center gap-2">
        <Typography variant="body2">
          Je serais heureux de discuter avec vous d'une opportunité d'emploi
          potentielle
        </Typography>
        <a
          className="text-base text-primary underline"
          href={`mailto:${EMAIL}`}
        >
          {EMAIL}
        </a>
        <SocialNetworks socialNetworks={SOCIAL_NETWORKS} />
      </div>
    </footer>
  );
};
