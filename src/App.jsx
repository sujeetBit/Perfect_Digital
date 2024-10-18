
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home';
import Header from './Header';
import About from './About';
import Service from './Service';
import Footer from './Footer';
import Contact from './Contact';



function App() {
  const  router = createBrowserRouter([
    {
    path: "/",
    element: <><Home/></>
    },

    {
      path: "/Service",
      element: <><Header/><Service/><Footer/></>
    },
    {
      path: "/about",
      element: <><Header/><About/><Footer/></>
    },
    {
      path: "/Contact",
      element: <><Header/><Contact/><Footer/></>
    },
 
 
  ])

  return (
    <>
    
    <RouterProvider router={router}/>
    
     
    </>
  )
}

export default App
