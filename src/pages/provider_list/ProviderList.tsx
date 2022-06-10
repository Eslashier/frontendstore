import '../../App.css'
import { useNavigate } from "react-router-dom";
import ProviderListTable from '../../components/providerList/ProviderListTable'


const ProviderList = () => {
  let navigate =useNavigate();
  return (
    <div className='main_content'>
      <h1>Provider list</h1>
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