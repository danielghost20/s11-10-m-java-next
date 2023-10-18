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
            {/*<Header />*/}
            <main className=''>
                {children}
            </main>
        </Provider>
    )
}

export default Providers