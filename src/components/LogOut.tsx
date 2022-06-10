import "./styles/stylesNavBar.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOutInReducer } from "../state/features/logginSlice";
import { RootState } from '../state/store';

const LogOut = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user} = useSelector((state:RootState) => state.logging)
    
    const logOutApp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        dispatch(logOutInReducer())
        
        navigate("/LogIn")
    }

    return (
        <div>
            <button className="logout" onClick={(e)=>logOutApp(e)}>Log out</button>
        </div>
    )
}

export default LogOut