import { useAppDispatch } from '@/utils/globalStates/hooks'
import { verPrestador } from '@/utils/globalStates/features/prestadoresSlice'
import Ticket from '@/components/ticket/Ticket'


export const CardServicio = (prestador: any) => {
    const dispatch = useAppDispatch()

    return (
        <div>
            <button onClick={() => {
                dispatch(verPrestador(prestador.prestador.id));
            }}>ver perfil</button>
            <p>name {prestador.prestador.name}</p>
            <p>email {prestador.prestador.email}</p>
            <Ticket />
        </div>
    )
}

