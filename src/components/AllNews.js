import React, { useState } from 'react';
import NewsCard from './NewsCard'
const AllNews = (props) => {
  const [allnews,setAllNews] = useState(props.news)
  console.log(allnews);
    return (
        <div>
            {   
            allnews.map((item)=>{
             return(
                <NewsCard key={item.title} singlenews={item}/>
             )
            })
        }
        </div>
    );
};

export default AllNews;