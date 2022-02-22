export enum CardActionTypes {
    
    ADD_TO_CARD="ADD_TO_CARD",
    FETCH_CARD="FETCH_CARD"

    
}

export interface ICatModel {

    id: number
    name: string
    colour: string
    character: string
}

export interface CardState {

    catsInCard: Array<ICatModel>   
    
}

export interface AddCatToCard {

    type: CardActionTypes.ADD_TO_CARD;
    payload: ICatModel
}

export interface FetchCard {

    type: CardActionTypes.FETCH_CARD;
    payload: Array<ICatModel>
}


export type CardAction = AddCatToCard|FetchCard;