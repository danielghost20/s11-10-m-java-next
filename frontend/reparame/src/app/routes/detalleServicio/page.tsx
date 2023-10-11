import DetalleServicio from '@/components/servicios/detalleServicio/DetalleServicio'
import Link from 'next/link'
import React from 'react'

const DetalleServicioPage = () => {
    return (
        <div>
            <p>DetalleServicioPage</p>
            <DetalleServicio />
            <Link href={'/routes/servicios'}>volver</Link>
        </div>
    )
}

export default DetalleServicioPage