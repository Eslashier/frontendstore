import '../../App.css'
import BillListTable from '../../components/billList/BillListTable'

const Bills = () => {
  return (
    <div className='main_content'>
      <h1>List of bills</h1>
      <BillListTable/>
    </div>
  )
}

export default Bills