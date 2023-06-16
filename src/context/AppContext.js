import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useLocation, useNavigate } from 'react-router-dom'
export const AppContext=createContext();

export default function AppContextProvider({children}){

    const [loading,setLoading]=useState(false);
    const [page,setPage]=useState(1);
    const[totalPage,setTotalPage]=useState(null);
    const [posts,setPosts]=useState([]);
    const navigate = useNavigate();

    async function fetchData(page=1,tag=null,category){
        let url = `${baseUrl}?page=${page}`;
        if(tag) {
          url += `&tag=${tag}`;
        }
        if(category) {
          url += `&category=${category}`;
        }
        try{
            setLoading(true);
            const op=await fetch(url);
            const data= await op.json();
            if (!data.posts || data.posts.length === 0)
            throw new Error("Something Went Wrong");
            console.log(data);
            setLoading(false);
            setPage(data.page);
            setTotalPage(data.totalPages);
            setPosts(data.posts)
        }
        catch(error)
        {
            alert("no data found");
            setPage(1);
            setPosts([]);
            setTotalPage(null)
           

        }
        setLoading(false);
    }

    const value={
        loading,
        setLoading,
        page,
        setPage,
        totalPage,
        setTotalPage,
        posts,
        setPosts,
        fetchData,handlePageChange
    }


    function handlePageChange(page){
        // setPage(page);
        // navigate( { search: `?page=${page}`});
        setPage(page);
        fetchData(page);
    }





     return <AppContext.Provider value={value} >
            {children}
     </AppContext.Provider>
}