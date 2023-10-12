import Image from 'next/image';
import logo from '../../../public/logo.png'

const Ticket = () => {
    const ticket = document.getElementById("ticket");
    const modalAlertContract = document.getElementById('modalAlertContrate')
    return (
        <>
            <dialog id="ticket">
                <form method="dialog"
                    className='flex flex-col gap-10 p-10'
                    onSubmit={() => {
                        console.log('aca iría el post'), modalAlertContract.showModal(), setTimeout(() => {
                            modalAlertContract.close()
                        }, 2000);
                    }}>
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
                        <button id="cancel" type="reset" onClick={() => { ticket.close() }}>Cancel</button>
                        <button type="submit">Confirm</button>
                    </menu>
                </form>
            </dialog>
            <menu>
                <button id="updateDetails" onClick={() => { ticket.showModal(); }}>Contratar</button>
            </menu>
            <dialog
                onClick={() => { modalAlertContract.close() }}
                id='modalAlertContrate'
                className='bg-green-400 p-10 rounded-xl'
            >
                <span>
                    Contratado con éxito!
                </span>
            </dialog>
        </>

    )
}

export default Ticket