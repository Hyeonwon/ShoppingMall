import { Nav, Navbar, Container } from 'react-bootstrap';
import data from './data'
import './App.css'
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom' 
import ProductPage from './Page/ProductPage'
import EventPage from './Page/EventPage';
import AboutPage from './Page/AboutPage';

function App() {
  
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className='App'>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">S&S</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('./')}}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('./detail')}}>Product</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg'></div>
            <div className='container'>
              <div className='row'>
                {shoes.map(function(a, i){
                  return(
                    <Items shoes={shoes} index={i}/>
                  )
                })}          
              </div>
            </div>
          </>
        }/>
        <Route path='/detail/:id' element={<ProductPage shoes={shoes}/>}/>
        
      </Routes>
    </div>
  )
}

function Items(props){
  return(
    <div className='col-md-4'>
      <img src = {props.shoes[props.index].img} width="80%"/>
      <h4>{props.shoes[props.index].title}</h4>
      <p>{props.shoes[props.index].price}</p>
    </div> 
  )
}

export default App


