'use client'
import { Provider } from 'react-redux'
import { store } from './store'
import Header from '@/components/header/Header'
import { useParams } from 'next/navigation'



function Providers({ children,
}: {
    children: React.ReactNode
}) {
    const rute = useParams()
    return (
        <Provider store={store}>
            {rute.servicios === 'servicios' ? <Header /> : <></>}
            <main className='flex items-center justify-center'>
                {children}
            </main>
        </Provider>
    )
}

export default Providers