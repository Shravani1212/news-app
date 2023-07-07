import React, { Fragment, useEffect, useState } from "react"
import CardD from "../card/CardD"
// const  News=[];
const Dashboad=props=>{
    // const [news,setNews]=useState([]);
    // useEffect(()=>{
    //     console.log('inside useEffect Dashbord');
    //     fetch('https://newsapi.org/v2/top-headlines?country=in&apikey=8a760bc53a8f4fbd888b82b5333142ff&page=1')
    //     .then((response) => response.json())
    //     .then((data) => setNews(data.articles))
    //     .then(()=>console.log(news))
    //     .catch((err) => console.log(err)); 
       
    // },[]);
   
    return <Fragment>
        {props.news.map((newItem,index) => {
          return  <CardD isdisplay={props.isReadList} key={index} Imgurl={newItem.urlToImage} Title={newItem.title} Author={newItem.author} />;
        })}
    </Fragment>
}

export default Dashboad;