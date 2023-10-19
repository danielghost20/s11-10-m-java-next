import { useAppDispatch } from "@/utils/globalStates/hooks";
import Ticket from "@/components/ticket/Ticket";
import { verServicios } from "@/utils/globalStates/features/serviciosSlice";
import { BsFillStarFill } from "react-icons/bs";
import Link from "next/link";

export const CardServicio = (servicios: any) => {
  const dispatch = useAppDispatch();

  return (
    <div className="rounded-xl border-2 p-4 max-w-5xl m-auto border-gray-300">
      <button
        onClick={() => {
          dispatch(verServicios(servicios.servicios.id));
        }}
      >
        ver perfil
      </button>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="w-20 h-20 rounded-full border-2 p-4 border-black" />
          <div className="flex flex-col justify-center gap-3">
            <div className="flex gap-3 text-dark-orange">
              <BsFillStarFill className="text-2xl" />
              <BsFillStarFill className="text-2xl" />
              <BsFillStarFill className="text-2xl" />
              <BsFillStarFill className="text-2xl" />
              <BsFillStarFill className="text-2xl" />
            </div>
            <h2>Juan Perez</h2>
          </div>
        </div>
        <div>
          <Link
            href="/"
            className="mt-3 border-b-2 border-dark-orange text-dark-orange max-h-max"
          >
            Ver Perfil
          </Link>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, at ipsa
        necessitatibus praesentium recusandae quis non sequi blanditiis velit
        sint labore vel placeat officiis quisquam maxime distinctio reiciendis
        ipsum repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Vitae porro aliquam recusandae asperiores quibusdam debitis ullam
        accusantium facilis veritatis laborum doloribus perspiciatis, delectus
        corporis. Quo reprehenderit vel eveniet! Recusandae, maiores.
      </p>
      <div className="flex w-full justify-between items-center mt-2">
        <p>lorego</p>
        <Ticket />
      </div>
    </div>
  );
};
