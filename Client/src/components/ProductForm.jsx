import { useState, useEffect, useRef } from "react";
import DVD from "./AttributeForms/DVD";
import Furniture from "./AttributeForms/Furniture";
import Book from "./AttributeForms/Book";
import '../assets/styles/ProductForm.scss'

// Task: Move Form Values State in Global State (Context) for better separation of concerns and access to State from Save Button 
const ProductForm = () => {
    const initialRender = useRef(true)

    // Task: Merge Product Type with Form Values
    const [productType, setProductType] = useState('')

    const [formValues, setFormValues] = useState({
        sku: "",
        name: "",
        price: "",
        type: productType,
        typeValues: [],
    })

    const [textInputIsValid, setTextInputIsValid] = useState({
        sku: false,
        name: false,
    })

    const [numberInputIsValid, setNumberInputIsValid] = useState({
        price: false,
        weight: false,
        size: false,
        height: false,
        width: false,
        length: false,
    })

    const [inputWasTouched, setInputWasTouched] = useState({
        sku: false,
        name: false,
        price: false,
        weight: false,
        size: false,
        height: false,
        width: false,
        length: false,
    })

    const handleTextInputValidation = (e) => {
        setInputWasTouched(previousState => {
            return {...previousState, [e.target.id]: true}
        })

        if (e.target.value.trim() === '') {
            setTextInputIsValid(previousState => {
                return {...previousState, [e.target.id]: false}
            })
            formValuesChangeHandler(e)
            return
        }

        setTextInputIsValid(previousState => {
            return {...previousState, [e.target.id]: true}
        })

        formValuesChangeHandler(e)
    }

    const handleNumberInputValidation = (e) => {
        setInputWasTouched(previousState => {
            return {...previousState, [e.target.id]: true}
        })

        if (isNaN(e.target.value)) {
            setNumberInputIsValid(previousState => {
                return {...previousState, [e.target.id]: false}
            })

            formValuesChangeHandler(e)
            return
        } else if (e.target.value === '') {
            setNumberInputIsValid(previousState => {
                return {...previousState, [e.target.id]: false}
            })
            
            formValuesChangeHandler(e)
            return
        }

        setNumberInputIsValid(previousState => {
            return {...previousState, [e.target.id]: true}
        })

        // If the Number Input has a leftover dot at the end, remove it
        if (e.target.value.slice(-1) === '.') {
            // Don't provide the DOM Element itself (e.target), because the removal of the dot from the value makes writting a dot on the input impossible. 
            formValuesChangeHandler({...e, target: {id: e.target.id, value: e.target.value.slice(0, -1)}})
            return
        }

        formValuesChangeHandler(e)
    }

    const productTypeChangeHandler = (e) => {
        setProductType(e.target.value)
    }


    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false
            return
        }

        setFormValues((previousState) => {
            return {...previousState, type: productType}
        })
    }, [productType])

    useEffect(() => {
        console.log(formValues)
    }, [formValues])

    const formValuesChangeHandler = (e) => {
        switch (e.target.id) {
            case 'sku':
            case 'name':
            case 'price':
                setFormValues((previousState) => {
                    return {...previousState, [e.target.id]: e.target.value}
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
                    return {...previousState, typeValues: [e.target.value, previousState.typeValues[1] ?? 0, previousState.typeValues[2] ?? 0]}
                })
                break;
            case 'width':
                setFormValues((previousState) => {
                    return {...previousState, typeValues: [previousState.typeValues[0] ?? 0, e.target.value, previousState.typeValues[2] ?? 0]}
                })
                break;
            case 'length':
                setFormValues((previousState) => {
                    return {...previousState, typeValues: [previousState.typeValues[0] ?? 0, previousState.typeValues[1] ?? 0, e.target.value]}
                })
                break;
        }
    }

    return (
        <div className="container">
            <form id="product_form">
                <div className="mb-3">
                    <label htmlFor="sku" className="form-label">SKU</label>
                    <input type="text" className={`form-control ${!textInputIsValid.sku && inputWasTouched.sku ? 'is-invalid' : ''}`} id="sku" onChange={handleTextInputValidation} required />
                    <div className="invalid-feedback">
                        This field cannot be empty.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className={`form-control ${!textInputIsValid.name && inputWasTouched.name ? 'is-invalid' : ''}`} id="name" onChange={handleTextInputValidation} required />
                    <div className="invalid-feedback">
                        This field cannot be empty.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price ($)</label>
                    <input type="text" id="price" className={`form-control ${!numberInputIsValid.price && inputWasTouched.price ? 'is-invalid' : ''}`} onChange={handleNumberInputValidation} aria-describedby="price_help_text" required />
                    <div className="invalid-feedback">
                        Please, provide a numeric value for that field.
                    </div>
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
                    { productType === 'DVD' && <DVD onInputChange={handleNumberInputValidation} inputIsValid={numberInputIsValid} inputWasTouched={inputWasTouched} /> }
                    { productType === 'Furniture' && <Furniture onInputChange={handleNumberInputValidation} inputIsValid={numberInputIsValid} inputWasTouched={inputWasTouched} /> }
                    { productType === 'Book' && <Book onInputChange={handleNumberInputValidation} inputIsValid={numberInputIsValid} inputWasTouched={inputWasTouched} /> }
                </div>
            </form>
        </div>
    );
};

export default ProductForm;