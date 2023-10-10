import React from 'react'
import { CardServicio } from './cardServicio/CardServicio'
import SearchBar from '../searchBar/SearchBar'


const Servicios = () => {
    return (
        <section>
            <SearchBar />
            <CardServicio />
        </section>
    )
}

export default Servicios