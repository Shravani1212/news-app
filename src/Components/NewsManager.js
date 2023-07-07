import React,{ Fragment,useEffect,useState } from "react"
import Dashboad from "./dashboad/Dashboad"
import Header from "./header/Header"

const NewsManager=props=>{
    const [news,setNews]=useState([]);
    const [newsType,setNewsType]=useState({id:1,result:''});
    let heading='';
    let isReadList=false;
    if(newsType.id===1){
        heading='Top-Headlines';
        isReadList=false;
    }
    else if(newsType.id===2){
        heading='SearchResult: ';
        isReadList=false;
    }
    else if(newsType.id===3){
        heading='Category: ';
        isReadList=false;
    }
    else if(newsType.id===4){
        heading='Read List';
        isReadList=true;
    }
    // useEffect(()=>{
    //     console.log('inside topline useEffect');
    //     fetch('https://newsapi.org/v2/top-headlines?country=in&apikey=8a760bc53a8f4fbd888b82b5333142ff&page=1')
    //     .then((response) => response.json())
    //     .then((data) => setNews(()=>{ return {name:'Top-Headlines',news:data.articles}}))
    //     .then(()=>console.log(newsObj))
    //     .catch((err) => console.log(err))
       
    // },[]);
    useEffect(()=>{
         console.log('inside search useEffect');
         let url='';
         if(newsType.id===1){
             url=`https://newsapi.org/v2/top-headlines?country=in&apikey=8a760bc53a8f4fbd888b82b5333142ff&page=1`;
         }
         else if(newsType.id===2){
             url=`https://newsapi.org/v2/everything?q=${newsType.result}&apiKey=8a760bc53a8f4fbd888b82b5333142ff&language=en&page=1`;
         }
         else if(newsType.id===3){
             url=  `https://newsapi.org/v2/top-headlines?country=in&category=${newsType.result}&apikey=8a760bc53a8f4fbd888b82b5333142ff`;
         }
         else if(newsType.id===4){
             url=`http://localhost:3004/news`;
         }
         fetch(url)
         .then((response) => response.json())
         .then((data) => { (newsType.id===4)?setNews(data):setNews(data.articles) } )
         .then(()=>console.log(news))
         .catch((err) => console.log(err))  
    },[newsType.id,newsType.result]);
    const searchUpdate=(res)=>{
        setNewsType({id:2,result:res});
    }
    const TopHeadlineupdate=()=>{
        setNewsType({id:1,result:''});
    }
    const ReadListUpdate=()=>{
        setNewsType({id:4,result:''});
    }
    const CategoryUpdate=(res)=>{
        console.log('inside category ',res);
        setNewsType({id:3,result:res});
    }
    return <Fragment>
    <Header  searchUpdateHandler={searchUpdate}  readListHandler={ReadListUpdate}  topHeadLineHandler={TopHeadlineupdate} categoryHandler={CategoryUpdate} />
   <div className="container my-3">
     <h2>{`${heading}${(newsType.id!=1 && newsType.id!=4)?newsType.result:``}`}</h2>
        <Dashboad news={news} isReadList={isReadList} />
   </div>
    </Fragment>
}
export default NewsManager;