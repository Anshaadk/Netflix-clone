import React, { useEffect, useMemo, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../Constants/constants'

function Banner() {
  const [movie, setMovie] = useState()
  const randomnumber = useMemo(()=>Math.floor(Math.random()*20),[])
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
      console.log(Response.data.results[randomnumber])
      setMovie(Response.data.results[randomnumber])
    })
  },[])
  return (
    <div style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path :""})`}}
     className='banner'>
        <div className='content'>
            <h1 className='title'>{movie? movie.title : ''}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>

            </div>
            <h1 className='discription'>{movie? movie.overview :""}</h1>

        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner