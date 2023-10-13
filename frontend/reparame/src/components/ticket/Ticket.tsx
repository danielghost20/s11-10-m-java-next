import Image from 'next/image';
import logo from '../../../public/logo.png'
import { useRef } from 'react'
const Ticket: React.FC = () => {
    const ticketRef = useRef<HTMLDialogElement>(null)
    const alertRef = useRef<HTMLDialogElement>(null)

    const openTicket = () => {
        ticketRef.current != null ? ticketRef.current.showModal() : {}
    }

    const closeTicket = () => {
        ticketRef.current != null ? ticketRef.current.close() : {}
    }
    const openAlert = () => {
        alertRef.current != null ? (alertRef.current.showModal(), setTimeout(() => {
            closeAlert
        }, 1000)) : {}
    }

    const closeAlert = () => {
        alertRef.current != null ? alertRef.current.close() : {}
    }
    return (
        <div>
            <dialog ref={ticketRef}>
                <form method="dialog"
                    className='flex flex-col gap-10 p-10'
                    onSubmit={openAlert}>
                    <section className='flex flex-col gap-5'>
                        <figure className='flex flex-row w-full justify-between items-center'>
                            <Image src={logo} alt='' width={10} height={10}
                                className='rounded-full  bg-white text-black text-xs items-center border-2 w-10 h-10' />
                            <span>⭐⭐⭐⭐</span>
                        </figure>
                        <p>este seria el ticket</p>
                        <p>supongamos que aca van los datos del prestador</p>
                        <p>y aca los datos del servicio</p>
                        <p>seria como un contrato</p>
                        <p className='self-end'>$1000</p>
                    </section>
                    <menu className='flex flex-row gap-10 self-center'>
                        <button id="cancel" type="reset" onClick={closeTicket}>Cancel</button>
                        <button type="submit">Confirm</button>
                    </menu>
                </form>
            </dialog>
            <menu>
                <button onClick={openTicket}>Contratar</button>
            </menu>
            <dialog
                onClick={closeAlert}
                ref={alertRef}
                className='bg-green-400 p-10 rounded-xl'
            >
                <span>
                    Contratado con éxito!
                </span>
            </dialog>
        </div>

    )
}

export default Ticket