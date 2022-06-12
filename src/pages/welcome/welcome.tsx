import '../../App.css'
import { RootState } from '..//./../state/store';
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logov2 from "../../imgs/Logov2.png"

const Receipts = () => {
  const { user } = useSelector((state: RootState) => state.logging)
  let navigate = useNavigate()

  useEffect(() => { if (user === null) { navigate("/") } }, [])

  return (
    <div className='main_content'>
      <h1>WELCOME</h1>
      <div><img className="hsLogo2" src={logov2} /></div>
      <div className="divUrls">
        <ul className="divUrls">
          <Link to="/ProviderList">Providers</Link>
          <Link to="/Inventory">Inventory</Link>
          <Link to="/NewOrder">New Order</Link>
          <Link to="/Bills">Bills</Link>
          <Link to="/Receipts">Receipts</Link>
        </ul>
      </div>
    </div>
  )
}

export default Receipts