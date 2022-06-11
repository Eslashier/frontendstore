import "../styles/tables.css";
import {productType} from '../../state/features/productSlice'

type productPropsType = {
    props: productType
}

const Product: React.FunctionComponent<productPropsType> = ({props}) => {

    if(props.stock===0){
        return <></>
    }
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
            </tr>
        </tbody>
    )
};

export default Product;