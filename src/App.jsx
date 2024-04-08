import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import ErrorPage from './error-page'
import Home from './pages/Home'

let router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  }
])

function App() {
  
  return (
    <RouterProvider router={router} fallbackElement={ <p> Cargando... </p> }/>
  )
}

export default App
