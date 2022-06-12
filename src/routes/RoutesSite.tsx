import { Route, Routes } from 'react-router-dom'
import LogIn from "../pages/log_in/LogIn"
import SignUp from "../pages/sign_up/SignUp"
import Bills from "../pages/bills/Bills";
import Welcome from "../pages/welcome/welcome";
import ProductAdd from "../pages/product_add/ProductAdd"
import ProductEdit from "../pages/product_edit/ProductEdit"
import ProductList from "../pages/product_list/ProductList"
import ProductListAll from "../pages/product_list_all/ProductListAll"
import ProviderAdd from "../pages/provider_add/ProviderAdd";
import ProviderList from "../pages/provider_list/ProviderList";
import Receipts from "../pages/receipts/Receipts";
import { useSelector } from "react-redux";
import { RootState } from '../state/store';

export default function RoutesSite() {
    const { user } = useSelector((state: RootState) => state.logging)

    if(user!==null){
        return(
        <Routes>
            <Route path='/Bills' element={<Bills />} />
            <Route path='/Welcome' element={<Welcome />} />
            <Route path='/ProductAdd' element={<ProductAdd />} />
            <Route path='/ProductEdit' element={<ProductEdit />} />
            <Route path='/NewOrder' element={<ProductList />} />
            <Route path='/Inventory' element={<ProductListAll />} />
            <Route path='/ProviderAdd' element={<ProviderAdd />} />
            <Route path='/ProviderList' element={<ProviderList />} />
            <Route path='/Receipts' element={<Receipts />} />
        </Routes>
        )
    }
    return (
        <Routes>
            <Route path='/' element={<LogIn />} />
            <Route path='/SignUp' element={<SignUp />} />
        </Routes>
    )
}

