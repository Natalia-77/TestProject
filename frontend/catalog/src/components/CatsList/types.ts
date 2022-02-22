export enum CatActionTypes {

    FETCH_CATS = "FETCH_CATS",
    FETCH_BY_COLOUR="FETCH_BY_COLOUR",
    FETCH_BY_CHARACTER="FETCH_BY_CHARACTER",    
    FETCH_ERROR = "FETCH_ERROR"
}

export interface ICatModel {

    id: number
    name: string
    colour: string
    character: string
}

export interface ISearchCatByColour {

    //name?: string
    colour?: string
    character?: string
}

export interface IResponseServer {

    data: Array<ICatModel>
}

export interface CatState {

    cats: Array<ICatModel>
    
}

export interface FetchSuccessCatAction {

    type: CatActionTypes.FETCH_CATS
    payload: Array<ICatModel>
}

export interface FetchCatByColourAction {

    type: CatActionTypes.FETCH_BY_COLOUR
    payload: Array<ICatModel>
}

export interface FetchCatByCharacterAction {

    type: CatActionTypes.FETCH_BY_CHARACTER
    payload: Array<ICatModel>
}


export interface FetchErrorsAction {

    type: CatActionTypes.FETCH_ERROR;
    payload: string
}

export type CatAction =
    FetchSuccessCatAction
    | FetchErrorsAction
    |FetchCatByColourAction
    |FetchCatByCharacterAction;