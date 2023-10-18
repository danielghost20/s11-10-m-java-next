'use client'
import { setLog } from '@/utils/globalStates/features/pathSlice'
import { useAppDispatch } from '@/utils/globalStates/hooks'
import React from 'react'
import { useEffect } from 'react'

const Registro = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setLog('login'))
    }, [dispatch])
    return (
        <section className='max-w-max-view w-full'>
            <p>
                Registro
            </p>
        </section>
    )
}

export default Registro