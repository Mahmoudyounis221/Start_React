import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Home from './component/Home/Home';
import Layout from './component/Layout/Layout';
import Portfolio from './component/Portfolio/Portfolio';
import Notfound from './Notfound/Notfound';
import ContactUs from './component/Contact/ContactUs';

const myrouter = createBrowserRouter([

  {
    path: '', element: <Layout />, children: [
      { path: '/', element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: "about", element: <About /> },
      { path: "Portfolio", element: <Portfolio /> },
      { path: "contact", element: <ContactUs /> },


      { path: '*', element: <Notfound /> }

    ]
  }
])


function App() {

  return <>
<RouterProvider router={myrouter}/ >
  </>
}

export default App;
