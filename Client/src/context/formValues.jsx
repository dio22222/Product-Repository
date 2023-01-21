import { createContext, useState } from "react"

const FormValuesContext = createContext({
    sku: "",
    name: "",
    price: "",
    productType: "",
    typeValues: [],
    formValid: false,
    formValuesChange: (formValues) => {}
})

export const FormValuesContextProvider = (props) => {
    const [formValues, setFormValues] = useState({
        sku: "",
        name: "",
        price: "",
        productType: "",
        typeValues: [],
        formValid: false,
    })

    const formValuesChangeHandler = (e) => {
        switch (e.target.id) {
            case 'sku':
            case 'name':
            case 'price':
                setFormValues((previousState) => {
                    return {...previousState, [e.target.id]: e.target.value}
                })
                break;
            case 'productType':
                console.log('Product Type Change')
                setFormValues((previousState) => {
                    // In this step, also empty the Type Values array, to reflect a change in Product Type
                    return {...previousState, [e.target.id]: e.target.value, typeValues: []}
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
                    return {...previousState, typeValues: [e.target.value, previousState.typeValues[1] ?? '', previousState.typeValues[2] ?? '']}
                })
                break;
            case 'width':
                setFormValues((previousState) => {
                    return {...previousState, typeValues: [previousState.typeValues[0] ?? '', e.target.value, previousState.typeValues[2] ?? '']}
                })
                break;
            case 'length':
                setFormValues((previousState) => {
                    return {...previousState, typeValues: [previousState.typeValues[0] ?? '', previousState.typeValues[1] ?? '', e.target.value]}
                })
                break;
        }
    }

    const handleFormValidation = () => {
        for (const value in formValues) {
            if (formValues[value] instanceof Array) {
                if (formValues[value].length === 0) return false

                for (let item in formValues[value]) {
                    if (formValues[value][item] === '') return false
                }
            }

            if (formValues[value] === '') return false
        }

        return true
    }

    const context = {
        sku: formValues.sku,
        name: formValues.name,
        price: formValues.price,
        productType: formValues.productType,
        typeValues: formValues.typeValues,
        formValid: handleFormValidation(),
        formValuesChange: formValuesChangeHandler,
    }

    console.log(context)

    return <FormValuesContext.Provider value={context}>
        { props.children }
    </FormValuesContext.Provider>
}

export default FormValuesContext