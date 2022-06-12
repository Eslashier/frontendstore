import "../styles/tables.css";
import {productType} from '../../state/features/productSlice'
import {useAppDispatch} from '../../state/store'
import {addProduct} from '../../state/features/orderSlice'

type productPropsType = {
    props: productType
}

const Product: React.FunctionComponent<productPropsType> = ({props}) => {

    const dispatch = useAppDispatch()

    const productsCart = (props: productType, quantity: number) => {
        const updateProduct: productType ={
            id: props.id,
            name: props.name,
            description: props.description,
            price: props.price,
            sold: quantity,
            stock: props.stock,
            minimumStock: props.minimumStock,
            maximumStock: props.maximumStock,
            provider: props.provider,
        }
        dispatch(addProduct(updateProduct))
    }

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
                <td><input type="number" min="0" max="100" onChange={(e)=>(productsCart(props, Number(e.target.value)))} /></td>
            </tr>
        </tbody>
        
    )
};

export default Product;