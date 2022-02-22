import { Dispatch } from "react";
import http from "../../http-common";
import {
    CatAction,
    ICatModel,
    CatActionTypes,
    ISearchCatByColour
} from "./types";

export const fetchAllKitty =
    () => async (dispatch: Dispatch<CatAction>) => {
        try {
            const response = await http.get<Array<ICatModel>>("/list");
            console.log(response.data);
            dispatch({
                type: CatActionTypes.FETCH_CATS,
                payload: response.data,
            });

            return Promise.resolve();

        } catch (error) {
            console.log("Error fetch list :", error);
            return Promise.reject();
        }
    };

export const fetchByColour =
    (search: ISearchCatByColour) => async (dispatch: Dispatch<CatAction>) => {
        try {
            const response = await http.get<Array<ICatModel>>(`/colour/${search.colour}`);
            console.log(response.data);
            dispatch({
                type: CatActionTypes.FETCH_BY_COLOUR,
                payload: response.data,
            });

            return Promise.resolve();

        } catch (error) {
            console.log("Error fetch cat by colour :", error);
            return Promise.reject();
        }
    };

export const fetchByCharacter =
    (search: ISearchCatByColour) => async (dispatch: Dispatch<CatAction>) => {
        try {
            const response = await http.get<Array<ICatModel>>(`/character/${search.character}`);
            console.log(response.data);
            dispatch({
                type: CatActionTypes.FETCH_BY_CHARACTER,
                payload: response.data,
            });

            return Promise.resolve();

        } catch (error) {
            console.log("Error fetch cat by character :", error);
            return Promise.reject();
        }
    };

