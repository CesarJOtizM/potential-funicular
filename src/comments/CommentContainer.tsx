import React, { ChangeEvent, useState } from "react";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { CommentItem } from "./components/CommentItem";

interface Iprops {
  comments: Commentary[];
  addComment: (commentBody: string) => void;
}

export const CommentContainer: React.FC<Iprops> = ({
  comments,
  addComment,
}) => {
  const [newComment, setNewComment] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.currentTarget.value);
  };

  const handleSend = () => {
    setNewComment("");
    addComment(newComment);
  };

  return (
    <div className="flex flex-col w-full h-80 border rounded-lg shadow-md overflow-hidden">
      <h2 className="text-lg font-bold p-4 bg-gray-100 border-b">Comments</h2>

      {/* Contenedor de comentarios con scroll */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 h-64">
        {comments.map((el, index) => (
          <React.Fragment key={el.id}>
            <CommentItem comment={el} />
            {index < comments.length - 1 && (
              <hr className="border-t border-gray-300" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Input y botón fijos */}
      <div className="border-t p-4 bg-white flex items-center gap-2 sticky bottom-0">
        <Input
          id="addComment"
          value={newComment}
          onChange={handleChange}
          placeholder="Add Comment"
          className="flex-1"
        />
        <Button onClick={handleSend}>Send</Button>
      </div>
    </div>
  );
};
