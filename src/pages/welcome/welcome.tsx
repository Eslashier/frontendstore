import '../../App.css'
import { RootState } from '..//./../state/store';
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Receipts = () => {
  const { user } = useSelector((state: RootState) => state.logging)
  let navigate = useNavigate()

  useEffect(() => {if (user === null) {navigate("/")}}, [])
  
  return (
    <div className='main_content'>
      <h1>WELCOME</h1>
    </div>
  )
}

export default Receipts