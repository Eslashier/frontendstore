import '../../App.css'
import ProviderForm from '../../components/providerList/ProviderForm'
import { useNavigate } from "react-router-dom";
import { RootState } from '..//./../state/store';
import { useSelector } from "react-redux";
import { useEffect } from 'react';

const AddProvider = () => {
  const { user } = useSelector((state: RootState) => state.logging)
  let navigate = useNavigate()

  useEffect(() => {if (user === null) {navigate("/")}}, [])

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