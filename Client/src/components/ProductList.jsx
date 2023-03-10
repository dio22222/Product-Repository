import Product from '../components/Product'
import '../assets/styles/ProductList.scss'

function ProductList(props) {
    return (
        <div className="product-list container-fluid d-flex flex-wrap justify-content-center">
              {props.productList.map((product, index) => (
                <Product key={index}
                         id={product.id}
                         sku={product.sku}
                         name={product.name}
                         price={product.price}
                         attribute={product.attribute} />
              ))}
        </div>
    );
}

export default ProductList;