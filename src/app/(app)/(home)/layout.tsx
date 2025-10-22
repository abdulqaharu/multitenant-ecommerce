import configPromise from "@payload-config";
import { getPayload } from "payload";

import Footer from "./footer";
import Navbar from "./navbar";
import { SearchFilters } from "./search-filters";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = async ({ children }: LayoutProps) => {
  const payload = await getPayload({
    config: configPromise,
  });
  const data = await payload.find({
    collection: "categories",
    pagination: false,
    depth: 2,
    where: {
      parent: {
        exists: false,
      },
    },
  });

  const formatedData = data.docs.map((doc) => ({
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
      doc,
    })),
  }));

  console.log("data", data);
  console.log("formattedData", formatedData);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={formatedData} />
      <div className="flex-1 bg-[#f4f4f0]">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
