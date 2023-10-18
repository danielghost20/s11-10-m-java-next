'use client'
import React, { useEffect } from 'react'
import IconServicios from './cardServicios/IconServicios'
import { useAppDispatch } from '@/utils/globalStates/hooks'
import { setLog } from '@/utils/globalStates/features/pathSlice'

const HomePage = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setLog('home'))
    }, [dispatch])
    return (
        <section className='max-w-max-view w-full'>
            <h1>Home</h1>
            <IconServicios />
        </section>
    )
}

export default HomePage