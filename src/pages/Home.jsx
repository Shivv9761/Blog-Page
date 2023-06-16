import React from 'react'
import Pagination from '../components/Pagination'
import Blogs from '../components/Blogs'
import Header from '../components/Header'

function Home() {
  return (
    <div  >
        <div>
            <Header/>
        </div>
        <div className=" my-[100px]  w-screen min-h-full flex flex-col justify-center items-center mt-[30px]" >
            <Blogs/>
        </div>
            <Pagination/>
    </div>
  )
}

export default Home