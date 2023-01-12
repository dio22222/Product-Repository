import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import Home from './pages/Home'
import AddProduct from './pages/AddProduct'
import RootLayout from './components/layout/RootLayout'
import { SelectedProductsContextProvider } from './context/selectedProducts'

// Styles
import './assets/styles/global.scss'

// Bootstrap JS
import 'bootstrap/dist/js/bootstrap'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="add-product" element={<AddProduct />} />
    </Route>
  )
)

function App() {

  return (
    <SelectedProductsContextProvider>
      <RouterProvider router={router} />
    </SelectedProductsContextProvider>
  )
}

export default App
