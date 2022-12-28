import React, { useState, useEffect } from 'react';
import Pagination from "react-paginate";
import axios from "axios";


export default function Paginate() {
  const [posts, setPosts] = useState([{count: 0, name: null}]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=45c558de41ced2373b930108825d0ef8&language=en-US&page=1`
      )
      .then(res => {
        //setFake(res.data.results.map(x => x.title));
        const response = res.data.results.map((x: any, idx: any) => x);
        setPosts(response);
        console.log(response);
      });
  }, []);

  const show = (x: any) => (
    <li key= {x.id} className='card'>
      <span>{x.title}</span>
    </li>
  )
  return (
    <Pagination data={posts}  Show={show} displayNumber='7' previousText='Previous' nextText='Next' />
  )
}
