import { Category } from "@/payload-types";
import Link from "next/link";

type Subcategoryprops = {
  category: Category;
  isOpen: boolean;
  position: {
    top: number;
    left: number;
  };
};

const SubcategoryMenu = ({ category, isOpen, position }: Subcategoryprops) => {
  console.log('category', category);

  const bgColor = category.color || "#f5f5f5";
  if (
    !isOpen ||
    !category.subcategories ||
    category.subcategories.length === 0
  ) {
    return null;
  }

  return (
    <div
      className="fixed z-100"
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      <div className="h-3 w-60"> </div>
      <div
        style={{
          backgroundColor: bgColor,
        }}
        className="w-60 text-black rounded-md overflow-hidden border shadow-[4px_4px_0px 0px_rgba(0,0,0,1)] -translate-x-[2px] -translate-y-[2px]"
      >
        <div>
          {category.subcategories?.map((subcategory: Category) => (
            <Link
              href="/"
              key={subcategory.doc.slug}
              className="w-full text-left p-4 hover:bg-black hover:text-white flex justify-between items-center underline font-medium"
            >
              {subcategory.doc.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubcategoryMenu;
