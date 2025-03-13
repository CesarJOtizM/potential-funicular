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
  user: User;
}

const UserCard: React.FC<Iprops> = ({ user }) => {
  return (
    <Link href={`/users/${user.id}`}>
      <Card className="w-full h-fit hover:scale-105 transition-transform duration-300">
        <CardHeader>
          <CardTitle>{user?.name}</CardTitle>
          <CardDescription>{user?.email}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <p>
              <b className="font-semibold">Username:</b> {user.username}
            </p>
            <p>
              <b className="font-semibold">Phone:</b> {user.phone}
            </p>
            <p>
              <b className="font-semibold">Company:</b> {user.company.name}
            </p>
            <p>
              <b className="font-semibold">Website:</b> {user.website}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export { UserCard };
