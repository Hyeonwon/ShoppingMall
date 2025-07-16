import { useParams } from "react-router-dom";

function ProductPage(props){

  let {id} = useParams();
  let foundProduct = props.shoes.find(function(x){
    return x.id == id;
  })

  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={foundProduct.img} width="100%" />
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