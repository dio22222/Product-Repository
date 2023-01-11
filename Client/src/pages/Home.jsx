import ProductList from '../components/ProductList'
import '../assets/styles/Home.scss'

const MOCK_PRODUCTS = [
  {
    sku: 'JVC200123',
    name: 'Acme DISC',
    price: 1.00,
    attribute: {
      title: 'Size',
      unit: 'MB',
      amount: [700]
    }
  },
  {
    sku: 'JVC200124',
    name: 'Acme DISC',
    price: 2.00,
    attribute: {
      title: 'Size',
      unit: 'GB',
      amount: [1]
    }
  },
  {
    sku: 'JVC200125',
    name: 'Acme DISC',
    price: 3.00,
    attribute: {
      title: 'Size',
      unit: 'GB',
      amount: [2]
    }
  },
  {
    sku: 'GGWP0007',
    name: 'Steel',
    price: 4.00,
    attribute: {
      title: 'Weight',
      unit: 'KG',
      amount: [4]
    }
  },
  {
    sku: 'TR120555',
    name: 'Chair',
    price: 30.00,
    attribute: {
      title: 'Dimensions',
      unit: 'cm',
      amount: [750, 50, 30]
    }
  },
  {
    sku: 'TRI120556',
    name: 'Desk',
    price: 50.00,
    attribute: {
      title: 'Dimensions',
      unit: 'm',
      amount: [1.5, 3, 0.8]
    }
  },
  {
    sku: 'JVC200123',
    name: 'Acme DISC',
    price: 1.00,
    attribute: {
      title: 'Size',
      unit: 'MB',
      amount: [700]
    }
  },
  {
    sku: 'JVC200124',
    name: 'Acme DISC',
    price: 2.00,
    attribute: {
      title: 'Size',
      unit: 'GB',
      amount: [1]
    }
  },
  {
    sku: 'JVC200125',
    name: 'Acme DISC',
    price: 3.00,
    attribute: {
      title: 'Size',
      unit: 'GB',
      amount: [2]
    }
  },
  {
    sku: 'GGWP0007',
    name: 'Steel',
    price: 4.00,
    attribute: {
      title: 'Weight',
      unit: 'KG',
      amount: [4]
    }
  },
  {
    sku: 'TR120555',
    name: 'Chair',
    price: 30.00,
    attribute: {
      title: 'Dimensions',
      unit: 'cm',
      amount: [750, 50, 30]
    }
  },
  {
    sku: 'TRI120556',
    name: 'Desk',
    price: 50.00,
    attribute: {
      title: 'Dimensions',
      unit: 'm',
      amount: [1.5, 3, 0.8]
    }
  },
  {
    sku: 'TRI120556',
    name: 'Desk',
    price: 50.00,
    attribute: {
      title: 'Dimensions',
      unit: 'm',
      amount: [1.5, 3, 0.8]
    }
  },
  {
    sku: 'TRI120556',
    name: 'Desk',
    price: 50.00,
    attribute: {
      title: 'Dimensions',
      unit: 'm',
      amount: [1.5, 3, 0.8]
    }
  },
]

const Home = () => {
    return (
        <>
          <h1 className="page-title">Product List</h1>
          <hr />
          <ProductList productList={MOCK_PRODUCTS}/>
        </>
    )
}

export default Home