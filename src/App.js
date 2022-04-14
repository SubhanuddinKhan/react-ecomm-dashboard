

// import Button from 'react-bootstrap/Button';
// import Link from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar';
// import Navbar from 'react-bootstrap/Navbar'
// import {Container} from 'react-bootstrap';
import {BrowserRouter, Route} from 'react-router-dom';

import Login from './components/Login';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import Register from './components/Register';

import Protected from './components/Protected';



function App() {
  return (
    <div className="App">

      <BrowserRouter>

    

     <h1>Ecommerce Dashboard </h1>


     <Route path="/addproduct">
       {/* <AddProduct /> */}
       <Protected Cmp={AddProduct} />
     </Route>
     
     <Route path="/updateproduct">
       {/* <UpdateProduct /> */}
       <Protected Cmp={UpdateProduct} />
     </Route>

     <Route path="/login">
       <Login />
     </Route>


     <Route path="/register">
       <Register />
     </Route>


    

     </BrowserRouter>
    </div>
  );
}

export default App;
