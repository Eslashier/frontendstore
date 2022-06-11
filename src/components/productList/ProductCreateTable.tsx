import "../styles/tables.css";
import {productType} from '../../state/features/productSlice'
import { useAppDispatch } from '../../state/store'
import { deleteProduct } from '../../actions/Product/deleteProduct'

type productPropsType = {
    props: productType
}

const Product: React.FunctionComponent<productPropsType> = ({props}) => {

    const dispatch = useAppDispatch()

    const onDelete = (props: productType) => {
        if(props.stock === 0){
            dispatch(deleteProduct(props))
        }
        else{
            alert('You cannot delete a product if it have existing stock')
        }
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
                <td><button className="edit" >Edit</button></td>
                <td><button className="delete" onClick={() => onDelete(props)}>Delete</button></td>
            </tr>
        </tbody>
    )
};

export default Product;