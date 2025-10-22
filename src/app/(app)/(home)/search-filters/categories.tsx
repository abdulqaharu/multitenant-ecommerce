import React from "react";
import CategoryDropdown from "./category-dropdown";
import { Category } from "@/payload-types";

type Props = {
  data: any;
};

export default function Categories({ data }: Props) {

  return (
    <div className="flex items-center gap-x-3">
      {data.map((category: Category) => (
        <div key={category.id}>
          <CategoryDropdown
            category={category}
            isActive={false}
            isNavigationHovered={false}
          />
        </div>
      ))}
    </div>
  );
}
