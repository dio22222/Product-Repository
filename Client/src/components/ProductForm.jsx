import { useState } from "react";
import DVD from "./AttributeForms/DVD";
import Furniture from "./AttributeForms/Furniture";
import Book from "./AttributeForms/Book";
import '../assets/styles/ProductForm.scss'

const ProductForm = () => {
    const [productType, setProductType] = useState('')

    const productTypeChangeHandler = (e) => {
        setProductType(e.target.value)
    }

    return (
        <div className="container">
            <form id="product_form">
                <div className="mb-3">
                    <label htmlFor="sku" className="form-label">SKU</label>
                    <input type="text" className="form-control" id="sku" />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price ($)</label>
                    <input type="number" id="price" step={0.01} className="form-control" aria-describedby="price_help_text" />
                    <div id="price_help_text" className="form-text">Decimal Separator must be represented by a dot.</div>
                </div>
                <div className="mb-3">
                    <select className="form-select" id="productType" defaultValue={'Product Type'} onChange={productTypeChangeHandler}>
                        <option id='initial' hidden>Product Type</option>
                        <option id="DVD">DVD</option>
                        <option id="Furniture">Furniture</option>
                        <option id="Book">Book</option>
                    </select>
                </div>
                <div className="container attribute-form">
                    { productType === 'DVD' && <DVD /> }
                    { productType === 'Furniture' && <Furniture /> }
                    { productType === 'Book' && <Book /> }
                </div>
            </form>
        </div>
    );
};

export default ProductForm;