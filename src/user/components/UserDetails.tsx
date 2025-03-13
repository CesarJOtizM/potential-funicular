import React from "react";
import { ProfileImage } from "./Avatar";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";

interface Iprops {
  user?: User;
}

export const UserDetails: React.FC<Iprops> = ({ user }) => {
  return (
    <section className="p-6 w-full max-w-3xl mx-auto bg-white shadow-lg rounded-xl">
      {/* Botón de regreso */}
      <Link
        href="/users"
        className="mb-6 flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all w-max"
      >
        <ArrowBigLeft className="w-5 h-5" />
        Back to Users
      </Link>

      {/* Nombre del usuario */}
      <h1 className="font-bold text-2xl text-gray-800 text-center">
        {user?.name}
      </h1>

      {/* Avatar del usuario (opcional) */}
      <div className="flex justify-center my-4">
        <ProfileImage name={user?.name} />
      </div>

      {/* Datos personales */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
        <h2 className="font-semibold text-lg text-gray-700 border-b pb-2 mb-3">
          Personal Data
        </h2>
        <div className="space-y-2">
          <p>
            <span className="font-semibold text-gray-600">Full Name:</span>{" "}
            {user?.name}
          </p>
          <p>
            <span className="font-semibold text-gray-600">Email:</span>{" "}
            {user?.email}
          </p>
          <p>
            <span className="font-semibold text-gray-600">Phone:</span>{" "}
            {user?.phone}
          </p>
          <p>
            <span className="font-semibold text-gray-600">Address:</span>{" "}
            {user?.address
              ? `${user.address.city}, ${user.address.street} ${user.address.suite}`
              : "N/A"}
          </p>
        </div>
      </div>

      {/* Datos de la compañía */}
      <div className="bg-gray-100 p-4 mt-4 rounded-lg shadow-sm">
        <h2 className="font-semibold text-lg text-gray-700 border-b pb-2 mb-3">
          Company Data
        </h2>
        <div className="space-y-2">
          <p>
            <span className="font-semibold text-gray-600">Company Name:</span>{" "}
            {user?.company?.name}
          </p>
          <p>
            <span className="font-semibold text-gray-600">Catch Phrase:</span>{" "}
            {user?.company?.catchPhrase}
          </p>
        </div>
      </div>
    </section>
  );
};
