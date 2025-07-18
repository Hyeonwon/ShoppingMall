import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap"
import '../App.css'

function ProductPage(props){

  let {id} = useParams();
  let foundProduct = props.shoes.find(function(x){
    return x.id == id;
  })
  let [alert, setAlert] = useState(true)
  let [tap, setTap] = useState(0)
  let [fade2, setFade2] = useState('')

  useEffect(() => {
    let a = setTimeout(() => { setAlert(false) }, 2000)

    return () => {
      clearTimeout(a)
    }
  }, [])

  useEffect(() => {
    setTimeout(() => { setFade2('end')}, 100)
    return () => {
      setFade2('')
    }
  }, [])
  

  return(
    <div className={'container start ' + fade2}>
      {
        alert == true ?
        <div className="alert alert-warning alertBox">
          2초 이내 구매시 할인
        </div>   
        : null
      }
      <div className="row">
        <div className="col-md-6">
          <img src = {"https://codingapple1.github.io/shop/shoes" + (foundProduct.id+1) + '.jpg'} width="100%" />
        </div>
        <div className="col-md-6">
          
          <h4 className="pt-5">{foundProduct.title}</h4>
          <p>{foundProduct.content}</p>
          <p>{foundProduct.price}</p>

          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>

      <Nav variant="tabs"  defaultActiveKey="link0">
        {/* 기본으로 눌려져 있는 키: link0 */}
        <Nav.Item>
          <Nav.Link onClick={() => {setTap(0)}} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => {setTap(1)}} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => {setTap(2)}} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TapContent tap={tap}/>
      
    </div> 
  )
}

function TapContent({tap}){
  
  let [fade, setFade] = useState('')

  useEffect(() => {
    setTimeout(() => { setFade('end')}, 100)
    return () => {
      setFade('')
    }
  }, [tap])

  return (<div className = {"start " + fade}> 
    {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tap]}
  </div>)
}



export default ProductPage;