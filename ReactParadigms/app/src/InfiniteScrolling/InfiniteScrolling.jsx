import axios from "axios";
import React, { useEffect, useState } from "react";

const InfiniteScrolling = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchItems = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?page=${page}`
    );
    setLoading(true);
    setItems((prevData) => [...prevData, ...response.data]);
  };
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
    return;
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetchItems();
  }, [page]);

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      {loading && <p>Loading more items...</p>}
    </div>
  );
};

export default InfiniteScrolling;
