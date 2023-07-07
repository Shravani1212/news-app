import React ,{ Fragment, useRef, useState } from "react"
import { Button, Input } from "reactstrap"
import classes from './Header.module.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Form,
    Col,
    FormGroup,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'reactstrap';
 const Header=props=>{
     const [isOpen,setIsOpen]=useState(false);
     const searchTextRef=useRef();
     const categoryRef=useRef();
     const toggle=()=>{
         setIsOpen((isOpen)=>!isOpen);
     }
    const searchHandler=()=>{
        console.log("searching...",searchTextRef.current.value);
        props.searchUpdateHandler(searchTextRef.current.value);
        searchTextRef.current.value='';

    }
    const clickHandler=(e)=>{
      e.preventDefault();
      console.log(e.target.value);
      props.categoryHandler(e.target.value);
    }
    return <Fragment>
        <Navbar color="dark" dark expand="md"  >
        <NavbarBrand href="/">News</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
            <Form inline>
                <FormGroup row className="mb-2 mr-2  mb-sm-0">
                    <Col lg={10} className="p-0" >
                        <input type="search" name="Search" id="searcgField" ref={searchTextRef}
                            placeholder="Enter Text Here... " className={classes.input1} />
                    </Col>
                    <Col lg={2} className="p-0">
                       <Button onClick={searchHandler}><i className="fa fa-search" aria-hidden="true"></i></Button>
                    </Col>
                </FormGroup>
              </Form>
            </NavItem>
            <NavItem>
            <NavLink onClick={props.topHeadLineHandler} className={classes['navlink-1']} >Top-Headlines</NavLink>
            </NavItem>
            <NavItem>
            <NavLink onClick={props.readListHandler} className={classes['navlink-1']} >Read List</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar  >
              <DropdownToggle nav caret>
                Categories
                </DropdownToggle>
              <DropdownMenu right >
                <DropdownItem onClick={clickHandler} value="business">
                  Business
                  </DropdownItem>
                  <DropdownItem onClick={clickHandler} value="entertainment">
                  Entertainment
                  </DropdownItem>
                  <DropdownItem onClick={clickHandler} value="general">
                  General
                  </DropdownItem>
                  <DropdownItem onClick={clickHandler} value="health">
                  Health
                  </DropdownItem>
                <DropdownItem onClick={clickHandler} value="sports">
                  Sports
                  </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </Fragment>
}
export default Header;