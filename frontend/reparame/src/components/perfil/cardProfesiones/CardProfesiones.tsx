'use client'
import { links } from "@/utils/profesiones"
export function CardProfesiones() {
  return (
    links.map((res: any) => (
      <span key={res.label} className="w-auto p-5 border-light-orange rounded-lg border-3">
        <res.icon className='text-2xl' />
      </span>
    ))
  )
}
