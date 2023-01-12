import { createContext, useState } from "react"

const SelectedProductsContext = createContext({
    products: [],
    totalProductsSelected: 0,
    selectProduct: (id) => {}, // Function passed here for IDE Autocomplete purposes. !! Delete in Production !!
    unselectProduct: (id) => {}, //  ""      ""    ""  ""   ""      ""         ""     ""   ""   ""     ""
})

export const SelectedProductsContextProvider = (props) => {
    const [selectedProducts, setSelectedProducts] = useState([])

    const selectProductHandler = (id) => {
        setSelectedProducts((previousState) => {
            return previousState.concat(id)
        })
    }
    
    const unselectProductHandler = (id) => {
        setSelectedProducts((previousState) => {
            return previousState.filter(product_id => product_id !== id)
        })
    }
    
    const context = {
        products: selectedProducts,
        totalProductsSelected: selectedProducts.length,
        selectProduct: selectProductHandler,
        unselectProduct: unselectProductHandler,
    }

    // console.log(context)
    
    return <SelectedProductsContext.Provider value={context}>
        { props.children }
    </SelectedProductsContext.Provider>
}

export default SelectedProductsContext