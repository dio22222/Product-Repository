import { useContext } from 'react'
import { Link } from 'react-router-dom'
import SelectedProductsContext from '../context/selectedProducts'
import FormValuesContext from '../context/formValues'

import '../assets/styles/NavButtons.scss'

const NavButtons = (props) => {
  const { totalProductsSelected } = useContext(SelectedProductsContext)
  const { formValid } = useContext(FormValuesContext)


  if (props.path === '/') {
    return (
      <div className="nav-buttons">
        <Link className='btn btn-primary' to="add-product">Add Product</Link>
        <button id='delete-product-btn' className='btn btn-danger' disabled={ totalProductsSelected === 0 }>
          { totalProductsSelected > 1 ? 'Mass Delete' : 'Delete' }
        </button>
      </div>
    )
  }

  return (
    <div className="nav-buttons">
      <button className='btn btn-success' disabled={ !formValid }>Save</button>
      <Link replace to={'/'} className='btn btn-danger text-light'>Cancel</Link>
    </div>
  )
}

export default NavButtons