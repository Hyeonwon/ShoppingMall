import { Nav, Navbar, Container } from 'react-bootstrap';
import data from './data'
import './App.css'
import { use, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import ProductPage from './Page/ProductPage'
import axios from 'axios';
import NotFound from './Page/NotFound';
import Cart from './Page/Cart'
import { useQuery } from 'react-query';

function App() {

  useEffect(() => {
    if(localStorage.getItem(JSON.stringify('watched').length) === 0){
      localStorage.setItem('watched', JSON.stringify([]))
    }
  },[])

  // localStorage.setItem('watched', JSON.stringify([]))

  let navigate = useNavigate();
  let [shoes, setShoes] = useState(data);
  let [clickCount, setClickCount] = useState(0);
  let [loading, setLoading] = useState(false);
  let [noMore, setNoMore] = useState(false);

  let result = useQuery('작명', () => {
    return axios.get('https://codingapple1.github.io/userdata.json')
    .then((a) => {
      return a.data
    })
  })
  
  const loadMore = () => {
    const urls = [
      'https://codingapple1.github.io/shop/data2.json',
      'https://codingapple1.github.io/shop/data3.json',
    ];

    if(clickCount < urls.length){
      setLoading(true)
      axios.get(urls[clickCount])
      .then((result) => {
        setShoes(prev => [...prev, ...result.data]);
        setClickCount(prev => prev + 1);
      })
      .catch(() => {
        console.log('faild');
      })
      .finally(() => {
        setLoading(false);
      })
    } else{
      setNoMore(true);
    }
  }

  return (
    <div className='App'>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">S&S</Navbar.Brand> 
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('./') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            { result.isLoading && '로딩중' }
            { result.error && '에러' }
            { result.data && result.data.name }
          </Nav>
        </Container>
      </Navbar>

      <Routes>  
        <Route path='/' element={
          <>
            <div className='main-bg'></div>
            <div className='container'>
              <div className='row'>
                {shoes.map(function (a, i) {
                  return (
                    <Items shoes={shoes} index={i} key={i} />
                  )
                })}
              </div>  
                {loading && <p>로딩중...</p>}
                {!noMore &&
                  <button onClick={loadMore} disabled={loading}>
                    더보기
                  </button>
                }
                {noMore && <p>더 이상 상품이 없습니다.</p>}
            </div>
          </>
        } />
        <Route path='/detail/:id' element={<ProductPage shoes={shoes} />} />
        <Route path='*' element={<NotFound/>}/>
        <Route path='/cart' element = {<Cart/>}/>
      </Routes>
    </div>
  )
}

function Items(props) {
  let navigate = useNavigate();

  return (
    <div className= 'col-md-4'>
      <img
        src={"https://codingapple1.github.io/shop/shoes" + (props.index + 1) + '.jpg'}
        width="80%"
        onClick={() => { navigate('/detail/' + props.index)
        }}
        style={{ cursor: 'pointer' }}
      />
      <h4>{props.shoes[props.index].title}</h4>
      <p>{props.shoes[props.index].price}</p>
    </div>
  )
}

export default App;
