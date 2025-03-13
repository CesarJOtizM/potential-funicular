import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";

interface Iprops {
  name?: string;
}

export const ProfileImage: React.FC<Iprops> = ({ name }) => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>{name}</AvatarFallback>
    </Avatar>
  );
};
