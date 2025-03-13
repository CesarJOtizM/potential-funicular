import { Label } from "@radix-ui/react-label";
import React, { ChangeEvent, PropsWithChildren } from "react";
import { Input } from "src/components/ui/input";

interface Iprops extends PropsWithChildren {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export const UserLayout: React.FC<Iprops> = ({
  children,
  onChange,
  disabled = false,
}) => {
  return (
    <section className="p-4 w-full">
      <h1 className="font-bold text-2xl mb-4">All Users</h1>

      <div className="w-full mb-4">
        <Label htmlFor="searchUser">Search user:</Label>
        <Input
          id="searchUser"
          onChange={onChange}
          disabled={disabled}
          placeholder="Buscar por nombre o username"
        />
      </div>

      <div
        className="grid gap-4 "
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, max-content))",
        }}
      >
        {children}
      </div>
    </section>
  );
};
