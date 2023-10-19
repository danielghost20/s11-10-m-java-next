import { useAppDispatch } from '@/utils/globalStates/hooks'
import Ticket from '@/components/ticket/Ticket'
import { verServicios } from '@/utils/globalStates/features/serviciosSlice'


export const CardServicio = (servicios: any) => {
    const dispatch = useAppDispatch()

    return (
        <div>
            <button onClick={() => {
                dispatch(verServicios(servicios.servicios.id));
            }}>ver perfil</button>
            <p>name </p>
            <p>email </p>
            <Ticket />
        </div>
    )
}

