import { X } from "lucide-react";
import CartItem from "./CartItem";
import Button from "./Button";

type CartTypeProps = {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  showCart: boolean;
};

const Cart = ({ setShowCart, showCart }: CartTypeProps) => {
  return (
    <div className="absolute right-0 flex h-screen w-[375px] flex-col bg-[#F2DAAC] p-5">
      {" "}
      <div
        className="flex justify-between"
        onClick={() => setShowCart(!showCart)}
      >
        <X className="cursor-pointer" />
        <p className="font-bold uppercase">Meu carrinho</p>
      </div>
      <div className="mt-10 flex flex-1 flex-col gap-2">
        <CartItem />
        <CartItem />
      </div>
      <Button title="Finalizar pedido" />
    </div>
  );
};
export default Cart;
