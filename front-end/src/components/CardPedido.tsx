import { User, CalendarFold, Watch } from "lucide-react";
type CardPedidoProps = {
  id: number;
  name: string;
  date: string;
  orderTime: string;
  delivered?: string;
  total: number;
};
const CardPedido = ({
  id,
  name,
  date,
  orderTime,
  delivered,
  total,
}: CardPedidoProps) => {
  return (
    <div>
      <div className="h-[155px] w-[200px] rounded-md bg-[#F2DAAC] p-2 text-[#161410]">
        <div className="flex justify-between">
          <p>#{id}</p>
          <select name="" id="" className="font-bold">
            <option value="" defaultChecked disabled>
              Pendente
            </option>
            <option value="">Retirado</option>
            <option value="">Cancelado</option>
          </select>
        </div>

        <div className="mt-2 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <User size={16} />
            <p className="text-xs">{name}</p>
          </div>
          <div className="flex items-center gap-2">
            <CalendarFold size={16} />
            <p className="text-xs">{date}</p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <Watch size={16} />
              <p className="text-xs">{orderTime}</p>
            </div>
            <div className="flex items-center gap-2">
              <Watch size={16} />
              <p className="text-xs">{delivered ? delivered : "-"}</p>
            </div>
          </div>
          <div className="mt-1 h-[1px] w-full bg-[#161410]"></div>
          <p className="text-right text-lg font-bold text-[#32343E]">
            R${total}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardPedido;
