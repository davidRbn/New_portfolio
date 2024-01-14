import { Typography } from "../atom/Typography";

export const Project = ({
  name,
  description,
  stargazerCount,
  url,
  homepageUrl,
}) => {
  return (
    <div className="flex w-60 flex-col gap-4 rounded-2xl bg-paper p-4 transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 md:w-80 md:p-8">
      <p className="w-full text-right">⭐ {stargazerCount}</p>
      <a href={url}>
        <Typography className="font-bold" variant="h3">
          {name}
        </Typography>
      </a>
      <Typography variant="body1">{description}</Typography>
      {homepageUrl ? (
        <a className="text-primary underline" href={homepageUrl}>
          {homepageUrl.replace("https://", "")}
        </a>
      ) : null}
    </div>
  );
};
