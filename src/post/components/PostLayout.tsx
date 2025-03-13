import { Label } from "@radix-ui/react-label";
import React, { ChangeEvent, PropsWithChildren } from "react";
import { Input } from "src/components/ui/input";

interface Iprops extends PropsWithChildren {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  onSortChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const PostLayout: React.FC<Iprops> = ({
  children,
  onChange,
  onSortChange,
  disabled = false,
}) => {
  return (
    <section className="p-4 w-full">
      <h1 className="font-bold text-2xl mb-4">All Posts</h1>

      <div className="w-full mb-4">
        {/* Ordenamiento */}
        <div className="flex items-center gap-2 h-[36px]">
          <Label htmlFor="sortOrder" className="text-sm">
            Sort:
          </Label>
          <select
            id="sortOrder"
            onChange={onSortChange}
            className="border px-3 py-1.5 rounded-md h-[36px] text-sm"
          >
            <option value="asc">Title (A-Z)</option>
            <option value="desc">Title (Z-A)</option>
          </select>
        </div>

        <div>
          <Label htmlFor="searchPost">Search post:</Label>
          <Input
            id="searchPost"
            onChange={onChange}
            disabled={disabled}
            placeholder="Search by title"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {children}
      </div>
    </section>
  );
};
