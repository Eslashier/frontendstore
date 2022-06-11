import React, { useEffect } from 'react';
import "../styles/tables.css";
import { useAppDispatch } from "../../state/store"
import { possibleStatus } from "../../configuration/possibleStatus"
import { selectReceiptsState, selectReceiptsStatus, selectReceiptsFetchError } from "../../state/features/receiptSlice"
import { getAllReceipts } from "../../actions/Receipt/getAllReceipts"
import { useSelector } from 'react-redux';
import ReceiptCreateTable from "./ReceiptCreateTable"

interface IReceiptListProps {
}

const ReceiptListTable: React.FunctionComponent<IReceiptListProps> = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (status === possibleStatus.IDLE) {
            dispatch(getAllReceipts())
        }
    }, [dispatch])

    const getReceipts = useSelector(selectReceiptsState())
    const status = useSelector(selectReceiptsStatus())
    const error = useSelector(selectReceiptsFetchError())

    return (
        <div>
            <table id="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Product ID</th>
                        <th>Product name</th>
                        <th>Quantity</th>
                        <th>Provider</th>
                    </tr>
                </thead>
                        {!error && getReceipts.map((receipt) => <ReceiptCreateTable key={receipt.id} props={receipt} />)}
            </table>           
        </div>
    )
}

export default ReceiptListTable;