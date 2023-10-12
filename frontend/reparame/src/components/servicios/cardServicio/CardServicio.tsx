import { useAppDispatch } from '@/utils/globalStates/hooks'
import { verPrestador } from '@/utils/globalStates/features/prestadoresSlice'


export const CardServicio = (prestador: any, setId: Function) => {
    const dispatch = useAppDispatch()

    return (
        <div>
            <p>name {prestador.prestador.name}</p>
            <p>email {prestador.prestador.email}</p>
            <button onClick={() => {
                dispatch(verPrestador(prestador.prestador.id));
            }}>ver perfil</button>
        </div>
    )
}

