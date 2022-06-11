import '../../App.css'
import ReceiptListTable from '../../components/receiptList/ReceiptListTable'

const Receipts = () => {
  return (
    <div className='main_content'>
      <h1>Receipts</h1>
      <ReceiptListTable/>
    </div>
  )
}

export default Receipts