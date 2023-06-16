import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';
import { NavLink } from 'react-router-dom'
const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <div>
    <div>
      <Header/>

    </div>
      <div className=' my-[100px] '>
 
     
      <div class="mt-[100px] mb-6 max-w-2xl mx-auto flex items-center space-x-2">
       <button  class="border-2 border-gray-300 py-1 px-4 rounded-md" onClick={()=>navigation(-1)} >Back</button>
        <h2 className="text-xl font-bold"> 
            Blogs on <span className='underline' >{category}</span>
        </h2>
      </div> 
      <div class="flex flex-col items-center gap-y-10 my-4">

<Blogs/>
</div>
  
      </div>
      <Pagination/>
    </div>
  )
}

export default CategoryPage
