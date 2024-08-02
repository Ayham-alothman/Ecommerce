import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Notfound from './pages/Notfound';
import Dashadmin from './pages/Dashadmin'; 
import Addproduct from './pages/Addprduct';


import ProtectRoute from './utilty/ProtectRoute';

function App() {
  return (
    <>
    <BrowserRouter>
    
     <Routes>
     
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='*' element={<Notfound/>}></Route>
      
       <Route element={<ProtectRoute/>}>
        <Route path='/dashadmin' element={<Dashadmin/>}></Route>
        <Route path='/addproduct' element={<Addproduct/>}></Route>
       </Route>
     </Routes>
    </BrowserRouter>
    </>
      
  );
}

export default App;
