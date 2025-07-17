import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductPage(props){

  let {id} = useParams();
  let foundProduct = props.shoes.find(function(x){
    return x.id == id;
  })
  let [alert, setAlert] = useState(true)

  useEffect(() => {
    let a = setTimeout(() => { setAlert(false) }, 2000)

    return () => {
      clearTimeout(a)
    }
  }, [])
  

  return(
    
    <div className="container">
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
    </div> 
  )
}

export default ProductPage;