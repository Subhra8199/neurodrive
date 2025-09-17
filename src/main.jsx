import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppLayout from './AppLayout.jsx'
import {store} from "./app/store.js"
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import History from "./pages/History.jsx"
import About from "./pages/About.jsx"
import Login from "./pages/Login.jsx"
import ProtectedRoutes from './components/ProtectedRoutes.jsx'


const router = createBrowserRouter([
  {
    path:'/', 
    element:<AppLayout/>,
    children:[
      {index:true, element:<Home/>},
      {
        path:"/history", 
        element:<ProtectedRoutes> <History/> </ProtectedRoutes>
      },
      {path:"/about", element:<About/>},
      {path:"/login",element:<Login/>}

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
