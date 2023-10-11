'use client'
import React from 'react'
import { CardServicio } from './cardServicio/CardServicio'
import { useEffect, useState } from 'react'
import { getServicios } from '@/utils/requestServicios/getServicios'
import DetalleServicio from './detalleServicio/DetalleServicio'
import { useAppSelector } from '@/utils/globalStates/hooks'

const Servicios = () => {
    const [prestadores, setPrestadores] = useState([])
    const id = useAppSelector(state => state.prestadores.value)
    useEffect(() => {
        getServicios(setPrestadores, id)
    }, [id])
    return (
        <section className='flex flex-col max-w-max-view w-full gap-12'>
            {prestadores ? prestadores.length > 0 ?
                <article className='flex flex-col gap-12'>
                    <h1 className='text-2xl'>Aca va la lista de proveedores</h1>
                    {prestadores.map(res => (
                        <CardServicio key={res.id} prestador={res} />
                    ))}
                </article>
                : <DetalleServicio prestador={prestadores} />
                : <h2>No se encontró ningún prestador</h2>}
        </section>
    )
}

export default Servicios