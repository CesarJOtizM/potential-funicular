import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";

interface Iprops {
  post: Post;
}

export const PostCard: React.FC<Iprops> = ({ post }) => {
  return (
    <Link href={`/post/${post?.id}`}>
      <Card className="w-full h-[340px] hover:scale-105 transition-transform duration-300">
        <CardHeader>
          <CardTitle className="text-center">{post.title}</CardTitle>
        </CardHeader>
        <CardContent className="text-justify">{post.body}</CardContent>
      </Card>
    </Link>
  );
};
