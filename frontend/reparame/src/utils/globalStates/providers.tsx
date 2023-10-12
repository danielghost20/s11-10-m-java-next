'use client'
import { Provider } from 'react-redux'
import { store } from './store'
import Header from '@/components/header/Header'

function Providers({ children,
}: {
    children: React.ReactNode
}) {
    return (
        <Provider store={store}>
            <Header />
            <main className='flex items-center justify-center'>
                {children}
            </main>
        </Provider>
    )
}

export default Providers