import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './About';
import Layout from './Layout';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Home from './Home';
import Notfound from './Notfound';




function App() {

  const route=createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'portfolio',element: <Portfolio/>},
      {path:'contact',element:<Contact/>},
      {path:'*',element:<Notfound/>},
    
    ]}
 

  ])
  return (
    <>
<RouterProvider router={route}/>
    </>
  );
}

export default App;