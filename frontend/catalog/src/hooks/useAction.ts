import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import CatsActionCreators from '../store/action-creator';


export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(CatsActionCreators, dispatch);
}