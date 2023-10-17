import { useAppDispatch } from '@/utils/globalStates/hooks'
import { verPrestador } from '@/utils/globalStates/features/prestadoresSlice'
import Ticket from '@/components/ticket/Ticket'
import Perfil from '@/components/perfil/Perfil'

const DetalleServicio = (prestador: any) => {
    const dispatch = useAppDispatch()
    return (
        <div>
            <button onClick={() => { dispatch(verPrestador('')) }}>{`<- volver`}</button>
            <Perfil />
            <Ticket />
        </div>
    )
}

export default DetalleServicio