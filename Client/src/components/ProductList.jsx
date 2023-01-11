import { useState, useEffect } from 'react';
import Product from '../components/Product'
import '../assets/styles/ProductList.scss'

function ProductList(props) {

    const [selectedProducts, setSelectedProducts] = useState([])

    const SelectProductHandler = (sku, checked) => {
        setSelectedProducts((previousState) => {
            // This is Error Prone because it assumes that the initial checked state is false and that all product skus are unique
            if (checked) return [...previousState, sku]
            else return previousState.filter(product => product !== sku)
        })
    }

    useEffect(() => {
        console.log(selectedProducts)
    }, [selectedProducts])

    return (
        <div className="product-list container-fluid d-flex flex-wrap justify-content-center">
              {props.productList.map((product, index) => (
                <Product key={index}
                         sku={product.sku}
                         name={product.name}
                         price={product.price}
                         attribute={product.attribute} 
                         handleProductSelection={SelectProductHandler}/>
              ))}
        </div>
    );
}

export default ProductList;