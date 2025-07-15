import { Nav, Navbar, Container } from 'react-bootstrap';
import data from './data'
import './App.css'
import { useState } from 'react';


function App() {
  
  let [shoes, setShoes] = useState(data);

  return (
    <div className='App'>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">S&S</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

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


