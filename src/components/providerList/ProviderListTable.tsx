import React, { useEffect } from 'react';
import "../styles/tables.css";
import { useAppDispatch } from "../../state/store"
import { possibleStatus } from "../../configuration/possibleStatus"
import { selectProvidersState, selectProvidersStatus, selectProvidersFetchError } from "../../state/features/providerSlice"
import { getAllProviders } from "../../actions/Provider/getAllProviders"
import { useSelector } from 'react-redux';
import ProviderCreateTable from "./ProviderCreateTable"

interface IProviderListProps {
}

const ProviderListTable: React.FunctionComponent<IProviderListProps> = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (status === possibleStatus.IDLE) {
            dispatch(getAllProviders())
        }
    }, [dispatch])

    const getProviders = useSelector(selectProvidersState())
    const status = useSelector(selectProvidersStatus())
    const error = useSelector(selectProvidersFetchError())

    return (
        <div>
            <table id="table">
                <thead>
                    <tr>
                        <th>Provider</th>
                        <th>Phone </th>
                        <th>Email</th>
                        <th>Provider ID</th>
                    </tr>
                </thead>
                        {!error && getProviders.map((provider) => <ProviderCreateTable key={provider.id} props={provider} />)}
            </table>           
        </div>
    )
}

export default ProviderListTable;