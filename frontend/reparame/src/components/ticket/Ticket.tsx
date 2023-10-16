'use client'

import Image from 'next/image';
import { useRef } from 'react';
import StarsUser from '../icons/StarsUser';
import { Button } from '@nextui-org/react';
// import { setInterval } from 'timers/promises';


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
            alertRef.current != null ? alertRef.current.close() : {}
        }, 2000)) : {}
    }
    const closeAlert = () => {
        alertRef.current != null ? alertRef.current.close() : {}
    }
    let f = new Date()
    let dia = f.getDate()
    let mes = f.getMonth()
    let anio = f.getFullYear()

    return (
        <div>
            <dialog ref={ticketRef}>
                <form method="dialog"
                    className='flex flex-col gap-5 p-10'
                    onSubmit={openAlert}>
                    <section className='flex gap-5 w-full'>
                        <div className='flex'>
                            <Image src={'/oficina1.jpg'} width={50} height={200} alt='oficina1' className='w-40 h-96'/>
                            <div className='flex flex-col'>
                                <Image src={'/oficina2.jpg'} width={50} height={100} alt='oficina1' className='w-40 h-48' />
                                <Image src={'/oficina3.jpg'} width={50} height={100} alt='oficina1' className='w-40 h-48'/>

                            </div>
                        </div>
                        <div className='w-96'>
                            <figure className='flex flex-row  justify-between items-center'>
                                <div className="flex gap-4 items-center">
                                    <Image src="/favicon.ico" width={80} height={80} alt='imagen prueba' className='rounded-full' />
                                </div>
                                <p>Nombre del Usuario</p>
                                <span>
                                    <StarsUser />
                                    {`${dia}/${mes}/${anio}`}
                                </span>
                            </figure>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta culpa nam quia explicabo iure, asperiores minima dolore consequuntur saepe maiores est et modi? Magnam, beatae hic dolore nesciunt dolorem quasi?
                            Itaque rerum distinctio, suscipit temporibus, libero vel nostrum ea dignissimos, provident eius tempore accusamus blanditiis quod minima vitae officiis modi repellat. Repellat, accusamus consequuntur dolore facere tempora omnis delectus ipsa.</p>
                            <menu className='flex flex-row gap-10 self-center'>
                                <Button color="warning" id="cancel" type="reset" onClick={closeTicket}>Cancel</Button>
                                <Button type="submit">Confirm</Button>
                            </menu>
                        </div>

                    </section>
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