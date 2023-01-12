import { useState, useEffect, useRef } from "react";
import DVD from "./AttributeForms/DVD";
import Furniture from "./AttributeForms/Furniture";
import Book from "./AttributeForms/Book";
import '../assets/styles/ProductForm.scss'

const ProductForm = () => {
    const [productType, setProductType] = useState('')

    const [formValues, setFormValues] = useState({
        sku: null,
        name: null,
        price: null,
        type: productType,
        typeValues: [],
    })

    const initialRender = useRef(true)

    const productTypeChangeHandler = (e) => {
        setProductType(e.target.value)
    }

    useEffect(() => {
        if (initialRender.current) {
            return
        }

        setFormValues((previousState) => {
            return {...previousState, type: productType}
        })
    }, [productType])

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false
            return
        }

        console.log(formValues)
    }, [formValues])

    const formValuesChangeHandler = (e) => {
        switch (e.target.id) {
            case 'sku':
                setFormValues((previousState) => {
                    return {...previousState, sku: e.target.value}
                })
                break;
            case 'name':
                setFormValues((previousState) => {
                    return {...previousState, name: e.target.value}
                })
                break;
            case 'price':
                setFormValues((previousState) => {
                    return {...previousState, price: e.target.value}
                })
                break;
            case 'weight': 
            case 'size':
                setFormValues((previousState) => {
                    return {...previousState, typeValues: [e.target.value]}
                })
                break;
            case 'height':
                setFormValues((previousState) => {
                    return {...previousState, typeValues: [e.target.value, previousState.typeValues[1] === undefined && 0, previousState.typeValues[2] === undefined && 0]}
                })
                break;
                case 'width':
                    setFormValues((previousState) => {
                        return {...previousState, typeValues: [e.target.value, previousState.typeValues[1] === undefined && 0, previousState.typeValues[2] === undefined && 0]}
                    })
                    break;
                case 'length':
                    setFormValues((previousState) => {
                        return {...previousState, typeValues: [e.target.value, previousState.typeValues[1] === undefined && 0, previousState.typeValues[2] === undefined && 0]}
                    })
                    break;
        }
    }

    return (
        <div className="container">
            <form id="product_form">
                <div className="mb-3">
                    <label htmlFor="sku" className="form-label">SKU</label>
                    <input type="text" className="form-control" id="sku" onChange={formValuesChangeHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" onChange={formValuesChangeHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price ($)</label>
                    <input type="number" id="price" step={0.01} className="form-control" onChange={formValuesChangeHandler} aria-describedby="price_help_text" />
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
                    { productType === 'DVD' && <DVD onFormValueChange={formValuesChangeHandler} /> }
                    { productType === 'Furniture' && <Furniture onFormValueChange={formValuesChangeHandler} /> }
                    { productType === 'Book' && <Book onFormValueChange={formValuesChangeHandler} /> }
                </div>
            </form>
        </div>
    );
};

export default ProductForm;