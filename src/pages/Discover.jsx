import React from 'react'
import {Error, Loader, SongCard} from '../components'
import {genres} from '../assets/constants'

const Discover = () =>{
    const genreTitle = 'Pop'
    return(
        <div className='flex flex-col'>
            <div className="w-full flex justify-between items-center flex-col mt-4 mb-10">
                <h2 className='text-3xl font-bold text-white text-left'>Discover {genreTitle}</h2>
                <select
                onChange={() => {}}
                value=""
                className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none mt-5 sm:mt-0'
                >
                {genres.map((genre)=> <option key={genre.value} value={genre.value}>{genre.title}</option>)}
                </select>
                
            </div>
        </div>
    )
}

export default Discover;
