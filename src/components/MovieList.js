import React, { useEffect, useState ,useRef} from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from './MovieCard'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import HrmovieCard from './HrMovieCard';


const MovieList = ({genreId, index_}) => {
    const [ movieList, setMovieList] = useState([])
    const elementRef= useRef(null);

   

    useEffect(()=>{
        getMovieByGenreId()
    })
    const getMovieByGenreId=() =>{
        GlobalApi.getMovieByGenreId(genreId).then(res=>{
            // console.log(res.data.results);
            setMovieList(res.data.results);
        })
    }
    const sliderRight=(element)=>{
      element.scrollLeft+=500
    }
   
    const sliderLeft=(element)=>{
      element.scrollLeft-=500
    }
  return (

   <div className='relative'>
          <HiChevronLeft  className=  {`hidden md:block text-white text-[50px] absolute p-2 z-10 ${index_%3===0?'mt-[70px]':'mt-[150px]'}  cursor-pointer`} onClick={()=>sliderLeft(elementRef.current)}/>
  
    <div className='flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth  pt-5 px-3 pb-5' ref={elementRef}>
      {movieList.map((item,index)=>(
        <>
          {index_%3===0 ? <HrmovieCard movie={item}/>:<MovieCard movie={item} />}
        </>
      ))}
            <HiChevronRight className={`hidden md:block text-white text-[50px] absolute p-2 z-10 top-0 ${index_%3===0?'mt-[70px]':'mt-[150px]'} cursor-pointer right-0 `}onClick={()=>sliderRight(elementRef.current)}/>

    </div>
    </div>
  )
}

export default MovieList
