import { Link } from 'react-router-dom'

import '../assets/styles/NavButtons.scss'

const NavButtons = (props) => {
  return (
  <>
    {props.path === '/' ? 
      <div className="nav-buttons">
        <Link to="add-product">Add Product</Link>
        <button className='btn btn-danger'>Mass Delete</button>
      </div>
      :
      <div className="nav-buttons">
        <button className='btn btn-success'>Save</button>
        <Link replace to={'/'} className='btn btn-danger text-light'>Cancel</Link>
      </div>
      
     } 
  </>
  )
}

export default NavButtons