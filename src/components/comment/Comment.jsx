import { Typography } from "../atom/Typography";

export const Comment = ({ username, comment, createdAt }) => {
  const createdAtDate = new Date(createdAt);

  const formattedDate = `${createdAtDate.getHours()}:${createdAtDate.getMinutes()} - ${createdAtDate.getDate()}/${createdAtDate.getMonth()}/${createdAtDate.getFullYear()}`;

  return (
    <fieldset className="flex flex-col justify-between rounded-md border-opacity-25 bg-paper p-4 pt-2">
      <legend className="text-sm text-primary">{username}</legend>
      <Typography variant="body2" className="break-all">
        {comment}
      </Typography>
      <Typography
        variant="body2"
        color="secondary"
        className="self-end text-xs"
      >
        {formattedDate}
      </Typography>
    </fieldset>
  );
};
