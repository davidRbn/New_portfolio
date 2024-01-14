import { TextField } from "../atom/TextField";
import { Button } from "../atom/Button";
import { useState } from "react";

export const CommentForm = ({ onSubmit }) => {
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const username = event.currentTarget.username.value ?? ""; // 4 and 20 char
    const comment = event.currentTarget.comment.value ?? ""; // 10 and 100 char

    if (username.length < 4 || username.length > 20) {
      setError("Username must be between 4 and 20 characters");
      return;
    }

    if (comment.length < 10 || comment.length > 100) {
      setError("Comment must be between 10 and 100 characters");
      return;
    }

    onSubmit({ username, comment })
      .then(() => {
        form.reset();
        setError(null);
      })
      .catch((error) => {
        if (error) {
          setError(error);
        }
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-4 md:px-8"
    >
      <TextField
        label="UserName"
        id="username"
        type="text"
        placeholder="Username"
      />

      <TextField
        label="Commentaire"
        id="comment"
        type="text"
        placeholder="Comment"
        component="textarea"
      />
      {error && <div className="text-red-500">{error}</div>}

      <Button type="submit">Submit</Button>
    </form>
  );
};
