import React, { useRef, useState } from "react";
import ItemCard from "../components/ItemCard/ItemCard";
import { useProducts, useProductsFunctions } from "../context/product.context";
import { categories } from "../data/categories";

const HomePage = () => {
  const divRef = useRef(null);
  const productList = useProducts();
  const { handleProductFilter, resetProducts } = useProductsFunctions();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const openBar = () => {
    if (divRef.current.classList.contains("side-bar-open")) {
      divRef.current.classList.remove("side-bar-open");
      setTimeout(() => {
        setIsSideBarOpen(false);
      }, 150);
    } else {
      divRef.current.classList.add("side-bar-open");
      setTimeout(() => {
        setIsSideBarOpen(true);
      }, 150);
    }
  };

  return (
    <div>
      <h2>Bulonera Jeannet</h2>
      <div className="main-content">
        <div ref={divRef} className="side-bar">
          {isSideBarOpen ? (
            <>
              <p onClick={openBar}>⬅️</p>
              <p onClick={resetProducts}>Todos</p>
              {categories.map((category) => (
                <p onClick={() => handleProductFilter(category.path)}>
                  {category.category_name}
                </p>
              ))}
            </>
          ) : (
            <p onClick={openBar}>{"➡️"}</p>
          )}
        </div>
        <div className="item-container">
          {productList?.map((item) => {
            return (
              <ItemCard key={item.id} item={item} categoryId={item.category} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
