import { ChevronLeft, ChevronRight, Trash } from "lucide-react";

const CartItem = () => {
  return (
    <div className="flex items-center gap-3">
      <img src="./vitamina.png" alt="" className="w-[100px] rounded-md" />
      <div className="flex-1">
        <p className="font-bold uppercase">Nome item</p>
        <p className="font-bold text-[#848484]">valor</p>
        <div className="mt-1 flex items-center gap-3">
          <div className="cursor-pointer rounded-md bg-[#C92A0E] p-1">
            <ChevronLeft size={18} className="text-[#F2DAAC]" />
          </div>
          <p>1</p>
          <div className="cursor-pointer rounded-md bg-[#C92A0E] p-1">
            <ChevronRight size={18} className="text-[#F2DAAC]" />
          </div>
        </div>
      </div>
      <Trash size={18} className="cursor-pointer" />
    </div>
  );
};

export default CartItem;
