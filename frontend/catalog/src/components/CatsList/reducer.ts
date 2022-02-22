import { CatState, CatAction, CatActionTypes } from "./types";
const initialState: CatState = {

    cats: []
};

export const catReducer = (state = initialState, action: CatAction): CatState => {
    switch (action.type) {

        case CatActionTypes.FETCH_CATS:
            return {
                ...state,
                cats: action.payload
            };
        case CatActionTypes.FETCH_BY_COLOUR:
            return {
                cats: action.payload
            };

        case CatActionTypes.FETCH_BY_CHARACTER:
            return {
                ...state,
                cats: action.payload
            };
        
        default:
            return state;

    };
}