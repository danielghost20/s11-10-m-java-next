'use client'
import React from 'react'
import { CardServicio } from './cardServicio/CardServicio'
import { useEffect, useState } from 'react'
import { getServicios } from '@/utils/requestServicios/getServicios'
import DetalleServicio from './detalleServicio/DetalleServicio'
import { useAppSelector } from '@/utils/globalStates/hooks'
import Skeleton from '../loadingSpinner/Skeleton'
import Ticket from '../ticket/Ticket'


const Servicios = () => {
    const [prestadores, setPrestadores] = useState([])
    const id = useAppSelector(state => state.prestadores.value)
    useEffect(() => {
        getServicios(setPrestadores, id)
    }, [id])
    return (
        <section className='flex flex-col max-w-max-view w-full gap-12'>
            {prestadores[0] || prestadores.length === undefined
                ? prestadores.length > 0 ?
                    <article className='flex flex-col gap-12'>
                        <h1 className='text-2xl'>Aca va la lista de proveedores</h1>
                        {prestadores.map((res: any) => (
                            <CardServicio key={res.id} prestador={res} />
                        ))}
                    </article>
                    : <DetalleServicio prestador={prestadores} />
                : <><Skeleton /><Skeleton /><Skeleton /></>}
        </section>
    )
}

export default Servicios