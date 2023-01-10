import '../assets/styles/Product.scss'

const Product = (props) => {
    return (
        <div className="product d-flex flex-column p-4 m-3">
          <div className='d-flex'>
            <input type="checkbox" name="" id="" className='' />
            <div className='sku'>{props.sku}</div>
          </div>
          <h5 className='name m-0'>{props.name}</h5>
          <div className='price'>{props.price}</div>
          <div className='attribute'>{props.attribute.title}: {props.attribute.amount}{props.attribute.unit}</div>
        </div>
    );
};

export default Product;