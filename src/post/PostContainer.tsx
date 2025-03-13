"use client";

import React, { ChangeEvent, useState } from "react";
import { SkeletonCard } from "src/components/common/SkeletonCard";
import { usePost } from "./services/getAllPost";
import { LazyPostCard } from "./components/LazyPostCard";
import { PostLayout } from "./components/PostLayout";

export const PostContainer: React.FC = () => {
  const { data, isLoading } = usePost();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value as "asc" | "desc");
  };

  const filteredPosts =
    searchTerm.trim() === ""
      ? data
      : data?.filter((post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const sortedPosts = filteredPosts?.slice().sort((a, b) => {
    return sortOrder === "asc"
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title);
  });

  if (isLoading)
    return (
      <PostLayout
        onChange={handleChange}
        onSortChange={handleSortChange}
        disabled
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </PostLayout>
    );

  return (
    <PostLayout onChange={handleChange} onSortChange={handleSortChange}>
      {sortedPosts?.length ? (
        sortedPosts.map((el) => <LazyPostCard key={el.id} post={el} />)
      ) : (
        <p className="text-gray-500">No se encontraron resultados.</p>
      )}
    </PostLayout>
  );
};
