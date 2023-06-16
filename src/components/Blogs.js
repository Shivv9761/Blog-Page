import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

function Blogs() {
    const {posts,loading}=useContext(AppContext);

  return (
    <div className='w-11/12 max-w-[670px] min-h-screen  '>
        {
            loading?(<div className=' min-h-screen flex flex-col justify-center items-center '><Spinner/></div>):(
                posts.size===0?(
                    <p>No result Found</p>
                ):
                (posts.map((post)=>{
                    return( <BlogDetails key={post.id} post={post}/>)
                }))
            )
        }
    </div>
  )
//   class="w-11/12 max-w-2xl mx-auto"  
}

export default Blogs