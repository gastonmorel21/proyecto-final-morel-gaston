import React, { useState, useEffect, useContext } from "react";
import { productActions } from "../actions";

const ProductContext = React.createContext({});

const defaultProductNotFound = {
  name: "Producto no encontrado",
  description: "El producto que buscas no existe",
  img: "https://azuramart.com/assets/images/no-items-found-clolor.png",
  price: 0,
  notFound: true,
};

const ProductProvider = ({ children }) => {
  const [initialValues, setInitialValues] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await productActions.getAllProducts();
      setInitialValues(products);
      setProducts(products);
    };
    fetchProducts();
  }, []);

  const getSingleProduct = (id) => {
    if (products.length === 0) return null;
    else {
      const [product] = products.filter((item) => item.id === id);
      return product ?? defaultProductNotFound;
    }
  };

  const handleProductFilter = (filter) => {
    const filteredProducts = initialValues.filter(
      (product) => product.category === filter
    );

    setProducts(filteredProducts);
  };

  const resetProducts = () => setProducts(initialValues);

  const state = {
    products,
  };
  const functions = {
    resetProducts,
    getSingleProduct,
    handleProductFilter,
  };

  return (
    <ProductContext.Provider value={{ state, functions }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };

export const useProducts = () => {
  const {
    state: { products },
  } = useContext(ProductContext);
  return products;
};

export const useGetSingleProduct = (id) => {
  const {
    functions: { getSingleProduct },
  } = useContext(ProductContext);

  const singleProduct = getSingleProduct(id);

  return singleProduct;
};

export const useProductsFunctions = () => {
  const {
    functions: { resetProducts, handleProductFilter },
  } = useContext(ProductContext);
  return { resetProducts, handleProductFilter };
};
