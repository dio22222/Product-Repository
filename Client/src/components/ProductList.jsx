import { useState, useEffect, useContext } from 'react';
import Product from '../components/Product'
import SelectedProductsContext from '../context/selectedProducts';
import '../assets/styles/ProductList.scss'

function ProductList(props) {
    const selectedProductsCtx = useContext(SelectedProductsContext)

    const SelectProductHandler = (id, checked) => { // Move this logic to Product
        if (checked) {
            selectedProductsCtx.selectProduct(id)
        } else {
            selectedProductsCtx.unselectProduct(id)
        }
    }

    return (
        <div className="product-list container-fluid d-flex flex-wrap justify-content-center">
              {props.productList.map((product, index) => (
                <Product key={index}
                         id={product.id}
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