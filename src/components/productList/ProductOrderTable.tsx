import "../styles/tables.css";
import { orderType } from "../../state/features/orderSlice"

type orderPropsType = {
    props: orderType
}

const ProductOrderTable: React.FunctionComponent<orderPropsType> = ({ props }) => {

    return (
        <tbody>
            {props.productListSale.map(product => {
                return <tr>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.sold}</td>
                </tr>
            })}
        </tbody>
    )
};

export default ProductOrderTable;