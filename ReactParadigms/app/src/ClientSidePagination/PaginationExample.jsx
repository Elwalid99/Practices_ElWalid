import React, { useEffect, useState } from "react";
import axios from "axios";

const PaginationExample = () => {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
    "Item 16",
    "Item 17",
    "Item 18",
    "Item 19",
    "Item 20",
    "Item 21",
    "Item 22",
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const sizePage = 5;
  const totalPages = Math.ceil(items.length/sizePage);
  const start = (currentPage-1) * sizePage;
  const end = sizePage * currentPage;
  const currentItems = items.slice(start, end);
  const handleChangePage = (page) => {
    setCurrentPage(page)
  }
  return <>
    {
      <div>
        {
          currentItems.map((element,index)=>{
            return <div key={index}>{element}</div>
          })
        }
      </div>
    }
    {
      Array.from({length:totalPages},(_,index)=>{
        return <button key={index} onClick={()=>handleChangePage(index+1)}>{index+1}</button>
      })
    }
  </>;
};

export default PaginationExample;
