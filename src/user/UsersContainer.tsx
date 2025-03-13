"use client";

import React, { ChangeEvent, useState } from "react";
import { useUsers } from "./services/getAllUsers";
import { SkeletonCard } from "src/components/common/SkeletonCard";
import { UserCard } from "./components/UserCard";
import { UserLayout } from "./components/UserLayout";

export const UsersContainer: React.FC = () => {
  const { data, isLoading } = useUsers();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

  const filteredUsers =
    searchTerm.trim() === ""
      ? data
      : data?.filter((user) =>
          `${user.name} ${user.username}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        );

  if (isLoading)
    return (
      <UserLayout onChange={handleChange} disabled>
        {Array.from({ length: 12 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </UserLayout>
    );

  return (
    <UserLayout onChange={handleChange}>
      {filteredUsers?.length ? (
        filteredUsers.map((el) => <UserCard key={el.id} user={el} />)
      ) : (
        <p className="text-gray-500">No se encontraron resultados.</p>
      )}
    </UserLayout>
  );
};
