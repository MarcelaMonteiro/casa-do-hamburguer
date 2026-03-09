import { ShoppingBag } from "lucide-react";
import type { ProductType } from "../types/Product";
import formatterPrice from "../utils/formatterPrice";

const Product = ({
  id,
  name,
  description,
  price,
  img,
  category,
}: ProductType) => {
  return (
    <div className="mt-2">
      <div className="flex gap-2">
        <img
          src={`./${img}`}
          className="h-[83px] w-[100px] md:h-[166px] md:w-[200px]"
        />
        <div className="flex flex-col">
          <p className="text-sm font-bold uppercase md:text-lg">{name}</p>
          <p className="md:text-md text-xs text-[#848484]">{description}</p>
          <div className="flex flex-1 items-center justify-end gap-2">
            <p className="text-sm text-[#F2DAAC]">{formatterPrice(price)}</p>
            <ShoppingBag size={18} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
