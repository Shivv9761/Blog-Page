import "./App.css";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Blogs from "./components/Blogs";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Route,Routes } from "react-router";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";
// import useLocation
import { useLocation, useNavigate,useSearchParams } from 'react-router-dom'
// import useSearchParams
// import useNavigate

export default function App() {
 const {fetchData}=useContext(AppContext);
 const [searchParams, setSearchParams] = useSearchParams();
 const location = useLocation();
 useEffect(() => {
  const page =  searchParams.get("page") ?? 1;

  if(location.pathname.includes("tags")) {
    //iska matlab tag wala page show krna h 
    const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
    fetchData(Number(page), tag);
  }
  else if(location.pathname.includes("categories")) {
    const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
    fetchData(Number(page), null, category);
  }
  else {
    fetchData(Number(page));
  }
}, [location.pathname, location.search]);

//  handlePageChange(2)
  return (
   <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/categories/:category" element={<CategoryPage/>} />
      <Route path="/tags/:tag" element={<TagPage/>} />
      <Route path="/blog/:blogId" element={<BlogPage/>} />
    </Routes>
   </>
  );
}
 // <div className="w-screen h-full flex flex-col gap-y-1 justify-center items-center">
    //     <Header/>
    //     <Blogs/>
    //     <Pagination/>
    // </div>