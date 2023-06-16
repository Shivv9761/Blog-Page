import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import Spinner from '../components/Spinner';
import BlogDetails from '../components/BlogDetails';
import Header from '../components/Header';
function BlogPage() {
    const [blog,setBlog]=useState(null);
    const navigate=useNavigate();
    const {loading,setLoading}=useContext(AppContext)
    const [relatedBlogs,setRelatedBlogs]=useState([]);
    const location=useLocation()
    const blogId=location.pathname.split('/').at(-1);
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    async function fetchBlog(){
        try {
            // const op=await fetch(`newBaseUrl${}`)
            setLoading(true);
            let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
            let op=await fetch(url);
            const data=await op.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        } catch (error) {
            alert("error while fetching data")
            setBlog(null)
            setRelatedBlogs([]);

        }
        setLoading(false);
    }

    useEffect(()=>{
        if(blogId){
            fetchBlog();
        }
    },[location.pathname])

  return (
    <div className=' w-screen min-h-screen' >
       <Header/>  
       <div className=" flex flex-col w-screen min-h-screen items-center   justify-center  mt-[100px]" >
       <button  className=' ml-[-600px] rounded-md border-2 px-4 py-1'  onClick={()=>navigate(-1)} >Back</button>
        <div className='w-screen min-h-screen flex flex-col justify-center items-center  '>
        {loading?
        (<Spinner/>)
        :
        (blog?(
            <div className="w-screen h-full flex flex-col justify-center items-center" >
            <BlogDetails post={blog} />
            <div>

            <h2 className="max-w-2xl mx-auto mt-12 font-bold text-3xl mb-8" > Related Blogs </h2>
            {
                relatedBlogs.map( (post) => (
                    <div key = {post.id}>
                        <BlogDetails post={post} />
                    </div>
                ) )
            }
            </div>

            </div>
        ):(
            <div>
                NO blogs found
            </div>
        ))}
        </div>
       </div>  
       
    </div>
  )
}

export default BlogPage