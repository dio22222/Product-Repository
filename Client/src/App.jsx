import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import AddProduct from './pages/AddProduct'
import RootLayout from './components/layout/RootLayout'

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
    <RouterProvider router={router} />
  )
}

export default App
