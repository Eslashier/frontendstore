import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogIn from "../pages/log_in/LogIn"
import Bills from "../pages/bills/Bills";
import Welcome from "../pages/welcome/welcome";
import ProductList from "../pages/product_list/ProductList"
import ProductListAll from "../pages/product_list_all/ProductListAll"
import ProviderAdd from "../pages/provider_add/ProviderAdd";
import ProviderList from "../pages/provider_list/ProviderList";
import Receipts from "../pages/receipts/Receipts";

export default function RoutesSite() {
    return (
        <Routes>
            {/* {logged && <Route path='/' element={<Welcome/>}/>} */}
            <Route path='/SignUp' element={<LogIn />} />
            <Route path='/Bills' element={<Bills />} />
            <Route path='/' element={<Welcome />} />
            <Route path='/ProductList' element={<ProductList />} />
            <Route path='/ProductListAll' element={<ProductListAll />} />
            <Route path='/ProviderAdd' element={<ProviderAdd />} />
            <Route path='/ProviderList' element={<ProviderList />} />
            <Route path='/Receipts' element={<Receipts />} />
        </Routes>
    )
}

