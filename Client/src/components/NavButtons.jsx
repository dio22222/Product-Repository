import { Link } from 'react-router-dom'

const NavButtons = (props) => {
  return (
  <div className="nav-links">
    {props.path === '/' ? 
      <>
        <Link to="add-product">Add Product</Link>
        <button>Mass Delete</button>
      </>
      :
      <>
        <button>Save</button>
        <Link>Cancel</Link>
      </>
     } 
  </div>
  )
}

export default NavButtons