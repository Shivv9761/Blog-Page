import React from 'react'
// import useLocation
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import { useLocation, useNavigate } from 'react-router-dom'
function TagPage() {

    const navigate=useNavigate()
    const location=useLocation();
    const tag=location.pathname.split('/').at(-1);
  return (
    <div  >
        <Header/>


        <div className=' my-[100px] '>

        <div  class="mt-[100px] mb-6 max-w-2xl mx-auto flex items-center space-x-2" >
            <button class="border-2 border-gray-300 py-1 px-4 rounded-md" onClick={()=>navigate(-1)} >Back</button>
            <h1 className="text-xl font-bold"> Blogs Tagged <span className='underline text-blue-700' >#{tag}</span></h1>
        </div> 
      <div class="flex flex-col items-center gap-y-10 my-4">

        <Blogs/>
      </div>
        <Pagination/>
        </div>


    </div>
  )
}

export default TagPage