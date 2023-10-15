import { loadProducts } from "@/utils/airtable";
import { createContext, useContext } from "react";

const ProductsContext = createContext({
  products: [],
});

const useProductsContext = () => useContext(ProductsContext);

const ProductsProvider = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const data = await loadProducts();

  return (
    <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
  );
};

export { loadProducts, ProductsProvider, ProductsContext, useProductsContext };
