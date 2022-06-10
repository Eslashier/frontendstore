import '../../App.css'
import ProviderForm from '../../components/providerList/ProviderForm'
import { useNavigate } from "react-router-dom";

const AddProvider = () => {
  let navigate = useNavigate();
  return (
    <div className='main_content'>
      <h1>Add a new provider</h1>
      <ProviderForm />
      <div className='centering'>
        <button className='button3' onClick={() => navigate("/ProviderList")}>Back</button>
      </div>
    </div>
  )
}

export default AddProvider