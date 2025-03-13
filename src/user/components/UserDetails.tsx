import React from "react";
import { ProfileImage } from "./Avatar";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";

interface Iprops {
  user?: User;
}

export const UserDetails: React.FC<Iprops> = ({ user }) => {
  return (
    <section className="p-4 w-full">
      <Link href="/users">
        <ArrowBigLeft />
      </Link>

      <h1 className="font-bold text-2xl mb-4">
        Information about {user?.name}
      </h1>

      {/* <ProfileImage name={user?.name} /> */}

      <h2 className="font-semibold text-xl mb-1">Personal Data</h2>
      <div className="mb-4 px-3">
        <p>
          <b className="font-semibold">Full name:</b> {user?.name}{" "}
        </p>
        <p>
          <b className="font-semibold">Email:</b> {user?.email}
        </p>
        <p>
          <b className="font-semibold">Phone number:</b> {user?.phone}
        </p>
        <p>
          <b className="font-semibold">address: </b>
          {`${user?.address.city}, ${user?.address.street} ${user?.address.suite}`}
        </p>
      </div>

      <h2 className="font-semibold text-xl mb-1">Company Data</h2>
      <div className="px-4">
        <p>
          <b className="font-semibold">Company Name:</b> {user?.company.name}
        </p>
        <p>
          <b className="font-semibold">Catch phrase:</b>{" "}
          {user?.company.catchPhrase}
        </p>
      </div>
    </section>
  );
};
