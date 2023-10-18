'use client'
import Image from "next/image";
import { MdModeEdit } from 'react-icons/md'
import { CardProfesiones } from "./cardProfesiones/CardProfesiones";
import { CardCertificados } from "./cardCertificados/CardCertificados";
import { useEffect, useState } from 'react'
import { useAppDispatch } from "@/utils/globalStates/hooks";
import { setLog } from "@/utils/globalStates/features/pathSlice";
const Perfil = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setLog('perfil'))
  }, [dispatch])
  const [exp, setExp] = useState('5')
  const [distance, setDistance] = useState('30')
  return (
    <section className="flex flex-col gap-10 max-w-max-textArea w-full px-10 pt-10 pb-10 text-light-orange bg-grayUi">
      <h1 className="text-2xl text-black">Configuración de perfil</h1>
      <figure className="flex flex-row items-center gap-20">
        <Image src={'/images/Ellipse 48.png'} alt="avatar User" width={120} height={120} className="rounded" />
        <figcaption className="text-2xl text-dark-orange">{`username`}</figcaption>
        <button>
          <MdModeEdit className='w-6 h-6' />
        </button>
      </figure>
      <article className="flex flex-col gap-10 items-center">
        <textarea name="" placeholder="Descripción" className="max-w-max-textArea w-full p-5 h-52"></textarea>
        <div className="flex flex-row w-full justify-center gap-10">
          <label className="flex flex-col bg-white gap-6 p-5 w-96">
            <div className="flex flex-row gap-10 w-full justify-between">
              <small className="text-sm">Distancia maxima</small>
              <span className="text-sm">{distance}{' '}km.</span>
            </div>
            <input type="range" value={distance} onChange={(e) => { setDistance(e.target.value) }} />
          </label>
          <label className="flex flex-col bg-white gap-6 p-5 w-96">
            <div className="flex flex-row gap-10 w-full justify-between">
              <small className="text-sm">Experiencia</small>
              <span className="text-sm">{exp}{' '}años</span>
            </div>
            <input type="range" value={exp} onChange={(e) => { setExp(e.target.value) }} />
          </label>
        </div>
        <div className="flex md:flex-row flex-col w-full justify-center gap-10 ">
          <label className="bg-white flex flex-row gap-5 p-5 w-96">
            {'+54'}
            <input type="text" placeholder={`numero`} className="w-full" />
          </label>
          <label className="bg-white flex flex-row gap-5 p-5 w-96">
            DNI
            <input type="text" placeholder={`numero`} className="w-full" />
          </label>
        </div>
      </article>
      <section className="flex flex-col gap-5">
        <h3>Profesiones</h3>
        <article className="flex flex-row gap-5">
          <CardProfesiones />
        </article>
      </section>
      <section className="flex flex-col gap-5">
        <h3>Certificados</h3>
        <article className="flex flex-row gap-5">
          <CardCertificados />
        </article>
      </section>
    </section>
  );
};
export default Perfil;