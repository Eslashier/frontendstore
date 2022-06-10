import {useSelector} from "react-redux";
import {RootState} from "./state/store";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from "./components/NavBar"
import Welcome from "./pages/welcome/welcome";
import LogIn from "./pages/log_in/LogIn"
import ProductList from "./pages/product_list/ProductList"
import ProductListAll from "./pages/product_list_all/ProductListAll"

function App() {
  // const logged = useSelector((state: RootState) => state.logging.isLogged)
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          {/* {logged && <Route path='/' element={<Welcome/>}/>} */}
          <Route path='/SignUp' element={<LogIn/>}/>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/ProductList' element={<ProductList/>}/>
          <Route path='/ProductListAll' element={<ProductListAll/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 