import '../../App.css'
import BillListTable from '../../components/billList/BillListTable'
import { RootState } from '..//./../state/store';
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Bills = () => {

  

  return (
    <div className='main_content'>
      <h1>List of bills</h1>
      <BillListTable />
    </div>
  )
}

export default Bills