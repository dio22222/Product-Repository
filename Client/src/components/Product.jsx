import { useState, useEffect, useRef } from 'react';
import '../assets/styles/Product.scss'

const Product = (props) => {

  const isFirstRender = useRef(true)

  const [checked, setChecked] = useState(false)

  const handleCheck = (e) => {
    setChecked(e.target.checked)
  }

  useEffect(() => { // Check if Redundant
    // Don't handle Initial Checked State (false)
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    
    // Lift State to ProductList
    props.handleProductSelection(props.id, checked)
  }, [checked])

  return (
    <div id={props.id} className="product d-flex flex-column p-4 m-3">
      <div className='d-flex'>
        <input type="checkbox" name="" onChange={handleCheck} />
        <div className='sku'>{props.sku}</div>
      </div>
      <h5 className='name m-0'>{props.name}</h5>
      <div className='price'>{props.price}</div>
      <div className='attribute'>{props.attribute.title}: {props.attribute.amount}{props.attribute.unit}</div>
    </div>
  );
};

export default Product;