import "../tables.css";
import React, {useState} from 'react';
import {providerType} from '../../state/features/providerSlice'

interface IProviderProps {
}

type providerPropsType = {
    props: providerType
}

const Provider: React.FunctionComponent<providerPropsType> = ({props}) => {

    return (
        <tbody>
            <tr>
                <td>{props.providerName}</td>
                <td>{props.phone}</td>
                <td>{props.email}</td>
                <td>{props.passport}</td>
            </tr>
        </tbody>
    )
};

export default Provider;