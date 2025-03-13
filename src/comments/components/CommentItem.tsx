import React from "react";

interface Iprops {
  comment: Commentary;
}

export const CommentItem: React.FC<{ comment: Commentary }> = ({ comment }) => {
  return (
    <div className="p-3 bg-white rounded-md shadow-sm border border-gray-200">
      <p className="font-bold text-gray-800">{comment.name}</p>
      <p className="text-gray-600">{comment.body}</p>
    </div>
  );
};
