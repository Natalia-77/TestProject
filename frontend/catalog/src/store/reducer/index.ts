import {combineReducers} from "redux";
import { catReducer } from "../../components/CatsList/reducer";
import {cardReducer} from '../../components/Card/reducer';

export const rootReducer = combineReducers({

    catty: catReducer,
    cardCats:cardReducer  
})

export type RootState = ReturnType<typeof rootReducer>