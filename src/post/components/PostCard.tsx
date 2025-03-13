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
    <Link href={`/post/${post.id}`} className="block">
      <Card className="w-full h-[300px] overflow-hidden rounded-xl shadow-md border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-gray-300">
        <CardHeader>
          <CardTitle className="text-center text-lg font-semibold">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-justify text-sm text-gray-700">
          {post.body.length > 150 ? `${post.body.slice(0, 100)}...` : post.body}
        </CardContent>
      </Card>
    </Link>
  );
};
