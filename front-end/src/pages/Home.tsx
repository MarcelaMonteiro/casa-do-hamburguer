import { Link } from "react-router";
import { useState } from "react";
import Product from "../components/Product";
import { useEffect } from "react";
import type { ProductType } from "../types/Product";

const Home = () => {
  const [category, setCategory] = useState("Hamburguer");
  const [products, setProducts] = useState<ProductType[]>([]);

  const handleChangeCategory = (newCategory: string) => {
    setCategory(newCategory);
  };

  const getCategoryClass = (categoryName: string) => {
    const elementoSelecionado =
      "md:text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border-1 border-[#F2DAAC] bg-[#F2DAAC] text-sm font-bold text-[#161410] md:h-9 md:w-32";
    const elementoNaoSelecionado =
      "md:text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border-1 border-[#F2DAAC] bg-[#161410] text-sm font-bold text-[#F2DAAC] hover:bg-[#F2DAAC] hover:text-[#161410] md:h-9 md:w-32";
    if (categoryName === category) {
      return elementoSelecionado;
    } else {
      return elementoNaoSelecionado;
    }
  };

  const getProduct = async () => {
    try {
      const response = await fetch("http://localhost:3000/get-products");
      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const filteredProducts = products.filter((product) => {
    return product.category === category;
  });

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="mx-auto w-full px-3 text-white md:w-[737px] md:px-0">
      <div className="my-1 flex gap-2 md:my-3">
        <div
          className={getCategoryClass("Hamburguer")}
          onClick={() => handleChangeCategory("Hamburguer")}
        >
          Hamburguer
        </div>
        <div
          className={getCategoryClass("Bebidas")}
          onClick={() => handleChangeCategory("Bebidas")}
        >
          Bebidas
        </div>
        <div
          className={getCategoryClass("Porcoes")}
          onClick={() => handleChangeCategory("Porcoes")}
        >
          Porcões
        </div>
      </div>
      <p className="mt-2 mb-2 font-bold text-[#F2DAAC] uppercase">{category}</p>
      <div className="flex flex-col gap-2 md:gap-3">
        {filteredProducts.map((product) => (
          <Product
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            img={product.img}
            key={product.id}
            category={product.category}
          />
        ))}
        {filteredProducts.length === 0 && (
          <p> Não há produtos dessa categoria. </p>
        )}
      </div>
    </div>
  );
};

export default Home;
