import '../../App.css'
import { useNavigate } from "react-router-dom";
import ProviderListTable from '../../components/providerList/ProviderListTable'
import { RootState } from '..//./../state/store';
import { useSelector } from "react-redux";
import { useEffect } from 'react';



const ProviderList = () => {
  const { user } = useSelector((state: RootState) => state.logging)
  let navigate = useNavigate()

  useEffect(() => {if (user === null) {navigate("/")}}, [])
  
  return (
    <div className='main_content'>
      <h1>Providers</h1>
      <ProviderListTable/>
      <br />
      <br />
      <div className='centering'>
        <button className='button4' onClick={() => navigate("/ProviderAdd")}>Add a provider</button>
      </div>
    </div>
  )
}

export default ProviderList