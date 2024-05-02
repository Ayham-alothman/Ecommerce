import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Notfound from './pages/Notfound';
function App() {
  return (
    <>
    <BrowserRouter>
    
     <Routes>
     
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='*' element={<Notfound/>}></Route>


     </Routes>
    </BrowserRouter>
    </>
      
  );
}

export default App;
