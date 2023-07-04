import React, { useEffect, useState } from "react";
import axios from "axios";
import AllNews from "./AllNews";
//import NewsCard from "./NewsCard"; 
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
const MainContent = () => {
  const [news, setNews] = useState([]);
  const [category,setCategory]=useState('')
  const [dropdownopen,setDropDownOpen]=useState(false)
  const [dropdownvalue,setDropDownValue]=useState('')
  // const [toggle,setToggle]=useState(false)
  const toggle=()=>{
    setDropDownOpen(!dropdownopen)
  }
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?category=${category}&apikey=51c48de17a6d487791a57610b06e4bee&page=1`
      )
      .then((res) => {
        console.log(res);
        setNews(res.data.articles);
        console.log(news);
        })
      .catch(err=>{
        console.log(err)
      });
  }, [category,news]);
  const handleClick = () => {
     setCategory(dropdownvalue)
  };
  return (
    <div>
      <Container>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple Jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <Dropdown isOpen={dropdownopen} toggle={()=>toggle()}>
            <DropdownToggle caret>Dropdown</DropdownToggle>
            <DropdownMenu>
              <DropdownItem value='Sports' onClick={(e)=>setDropDownValue(e.target.value)}>Sports</DropdownItem>
              <DropdownItem disabled>Business</DropdownItem>
              <DropdownItem>Entertainment</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Health</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Button color="primary outline" onClick={() => handleClick()}>
            Category Wise News
          </Button>
          <Button color="primary outline" style={{ marginLeft: 8 }}>
            Trending News
          </Button>
          <Form className="mx-auto">
            <FormGroup>
              <Label for="exampleSearch">Search</Label>
              <Input
                type="search"
                name="search"
                id="exampleSearch"
                placeholder="search placeholder"
                style={{ width: 300 }}
              />
            </FormGroup>
          </Form>
        </p>
        
        <AllNews news={news}/> 
      </Container>
    </div>
  );
};

export default MainContent;
