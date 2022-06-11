import "../styles/tables.css";
import {productType} from '../../state/features/productSlice'

type productPropsType = {
    props: productType
}

const Product: React.FunctionComponent<productPropsType> = ({props}) => {

    return (
        <tbody>
            <tr>
                <td>{props.name}</td>
                <td>{props.description}</td>
                <td>{props.price}</td>
                <td>{props.stock}</td>
                <td>{props.minimumStock}</td>
                <td>{props.maximumStock}</td>
                <td>{props.provider.providerName}</td>
                <td><button className="edit">Edit</button></td>
                <td><button className="delete">Delete</button></td>
            </tr>
        </tbody>
    )
};

export default Product;