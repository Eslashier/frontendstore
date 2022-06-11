import "../styles/tables.css";
import {receiptType} from '../../state/features/receiptSlice'

type receiptPropsType = {
    props: receiptType
}

const Receipt: React.FunctionComponent<receiptPropsType> = ({props}) => {

    return (
        <tbody>
            <tr>
                <td>{props.id}</td>
                <td>{props.date}</td>
                <td>{props.product.id}</td>
                <td>{props.product.name}</td>
                <td>{props.units}</td>
                <td>{props.product.provider.providerName}</td>
            </tr>
        </tbody>
    )
};

export default Receipt;