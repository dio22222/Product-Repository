import { useContext } from 'react';
import SelectedProductsContext from '../context/selectedProducts';
import '../assets/styles/Product.scss'

const Product = (props) => {
  const selectedProductsContext = useContext(SelectedProductsContext)
  const amount = props.attribute.amount

  const handleCheck = (e) => {
    if (e.target.checked) {
      selectedProductsContext.selectProduct(props.id)
    } else {
      selectedProductsContext.unselectProduct(props.id)
    }
  }

  const amountFormated = amount.length > 1 ?
    amount.map((value, index) => {
      if (index !== amount.length - 1 ) {
        return value + 'x' 
      } else { 
        return value
      }
    }) : amount

  return (
    <div id={props.id} className="product d-flex flex-column p-4 m-3">
      <div className='d-flex'>
        <input type="checkbox" name="" onChange={handleCheck} />
        <div className='sku'>{props.sku}</div>
      </div>
      <h5 className='name m-0'>{props.name}</h5>
      <div className='price'>${props.price}</div>
      <div className='attribute'>{props.attribute.title}: { amountFormated }{props.attribute.unit}</div>
    </div>
  );
};

export default Product;