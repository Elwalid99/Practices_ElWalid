import axios from "axios";
import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const [currentPosts, setCurrentPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${pageSize}`
      )
      .then((res) => {
        setCurrentPosts(res.data);
        setLoading(false);
        setTotalPages(Math.ceil((res.headers.get("x-total-count"))/pageSize))
        console.log("fetched");
      });
  }

  useEffect(() => {
    fetchData()
    console.log("sk");
    
  },[currentPage]);

  const changePage = (page) => {
    setCurrentPage(page)
  }

  return (
    <>
      <div>  
        <div>{loading ? <span>loading ...</span>: ""}</div>
        {
        
        currentPosts.map((post) => {
         
          return  <div><span>{post.id}</span>{post.title}</div>;
        })
        }
      </div>
      <div>
        {
          Array.from({length: totalPages},(_, index)=>{
            return <button key={index} onClick={()=>changePage(index+1)}>{index+1}</button>
          })
        }
      </div>
    </>
  );
};

export default Pagination;
