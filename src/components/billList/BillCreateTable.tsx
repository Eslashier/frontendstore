import "../styles/tables.css";
import { billType } from '../../state/features/billSlice'

type billPropsType = {
    props: billType
}

const Bill: React.FunctionComponent<billPropsType> = ({ props }) => {
    return (
        <tbody>
            <tr>
                <td>{props.id}</td>
                <td>{props.date}</td>
                <td>{props.clientName}</td>
                <td>{props.salesmanName}</td>
                <td><table>{props.productListSale.map(product => {
                        return <tr>
                            <td>{product.name}</td>
                            <td>{product.sold}</td>
                        </tr>
                })}
                </table></td>
                <td>{props.totalSale}</td>
            </tr>
        </tbody>
    )
};

export default Bill;