import React from "react";
import {Card,CardBody,CardTitle,CardSubtitle,CardLink,CardText} from 'reactstrap'
const NewsCard = (props) => {
  return (
    <div>
      <Card>
       
        <CardBody>
        <img width="100%" src={props.singlenews.urlToImage}/>
          {/* <CardTitle>Card title</CardTitle> */}
          <CardSubtitle>{props.singlenews.title}</CardSubtitle>
             
          <CardText>{props.singlenews.author}</CardText>
          <CardLink className='btn btn-primary' href="#">Read Later</CardLink>
          {/* <CardLink href="#">Another Link</CardLink> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default NewsCard;
