"use client";
import React from "react";
import { useUserById } from "./services/getUserById";
import { SkeletonCard } from "src/components/common/SkeletonCard";
import { UserDetails } from "./components/UserDetails";

interface Iprops {
  id: string;
}

export const UserByIdContainer: React.FC<Iprops> = ({ id }) => {
  const { data, isLoading } = useUserById(id);

  if (isLoading) return <SkeletonCard />;

  return <UserDetails user={data} />;
};
