import React, { useEffect, useState } from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardText, Button
} from "reactstrap"
const CardD=props=>{
    const [btnClick,setBtnClick]=useState(false);
    const clickHandler=()=>{
        setBtnClick(true);
    }
    useEffect(()=>{
        console.log("outside read json started");
        if(btnClick){
            console.log("inside read json started");
            fetch('http://localhost:3004/news',{
                method: "POST",
                body: JSON.stringify({
                  title: props.Title,
                  urlToImage: props.Imgurl,
                  author: props.Author 
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
              }).then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error)=>console.log(error));
      console.log("outside read json ended");
        }
    },[btnClick]);
    return(
        <Card style={{
            display: 'inline-block', width: 300, padding: 10,
            margin:10,height:600 ,overflow:'auto'
        }} >
        <CardImg
           
            height="300px"
        src={props.Imgurl}
            alt="GFG Logo" />
        <CardBody>
            <CardTitle tag="h5">{props.Title}</CardTitle>
            <CardText>{`- ${props.Author===null?'NA':props.Author}`}</CardText>
           { props.isdisplay?``: (btnClick ? <Button className="btn-danger" disabled >Added To Read Later</Button>:<Button onClick={clickHandler} >Read Later</Button>)} 
        </CardBody>
    </Card>
    );
}
export default CardD;