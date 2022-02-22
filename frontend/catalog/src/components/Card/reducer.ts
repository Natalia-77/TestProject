
import { CardState, CardAction, CardActionTypes,ICatModel } from "./types";

const initialState: CardState = {

    catsInCard: []   
    
};

export const cardReducer = (state = initialState, action: CardAction): CardState => {
    
    switch (action.type) {

        case CardActionTypes.ADD_TO_CARD:           
          console.log("Add in reducer: ",action.payload);
          
          const addeditem={
            id:action.payload.id,
            name:action.payload.name,
            character:action.payload.character,                    
            colour:action.payload.colour           
        };
        
            return {
                ...state,
                catsInCard:[
                    ...state.catsInCard,
                    addeditem
                ]
                
            };           
            case CardActionTypes.FETCH_CARD:
            return {
                ...state,
                catsInCard: action.payload                
                
            };

        default:
            return state;

    };
}