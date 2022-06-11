import React, { useEffect } from 'react';
import "../styles/tables.css";
import { useAppDispatch } from "../../state/store"
import { possibleStatus } from "../../configuration/possibleStatus"
import { selectBillsState, selectBillsStatus, selectBillsFetchError } from "../../state/features/billSlice"
import { getAllBills } from "../../actions/Bill/getAllBills"
import { useSelector } from 'react-redux';
import BillCreateTable from "./BillCreateTable"

interface IBillListProps {
}

const BillListTable: React.FunctionComponent<IBillListProps> = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (status === possibleStatus.IDLE) {
            dispatch(getAllBills())
        }
    }, [dispatch])

    const getBills = useSelector(selectBillsState())
    const status = useSelector(selectBillsStatus())
    const error = useSelector(selectBillsFetchError())

    return (
        <div>
            <table id="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Client</th>
                        <th>Seller</th>
                        <th>Product/Qty</th>
                        <th>Total</th>
                    </tr>
                </thead>
                        {!error && getBills.map((bill) => <BillCreateTable key={bill.id} props={bill} />)}
            </table>           
        </div>
    )
}

export default BillListTable;