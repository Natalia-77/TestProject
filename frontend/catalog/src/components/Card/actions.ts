import { Dispatch } from "react";
import {
    CardAction,
    ICatModel,
    CardActionTypes
} from "./types";
import http from '../../http-common';



export const addToCard = (item: ICatModel) => async (dispatch: Dispatch<CardAction>) => {
    try { 

    //тут я написала запит на сервер,але бекенд просто не встигаю написати.Але суть думаю зрозуміла тут і без цього.
        //const response = await http.post<ICatModel>("/card/add");      
        dispatch({
            type: CardActionTypes.ADD_TO_CARD,
            payload: item
        });          
      
        console.log("Added item :", item);
        return Promise.resolve();

    }
    catch (error) {
        console.log("Error add to card :", error);
        return Promise.reject();
    }
};

export const fetchCard =
    () => async (dispatch: Dispatch<CardAction>) => {
        try {
            //тут я написала запит на сервер,але бекенд просто не встигаю написати.Але суть думаю зрозуміла тут і без цього.
            const response = await http.get<Array<ICatModel>>("/card/list");
            console.log(response.data);
            dispatch({
                type: CardActionTypes.FETCH_CARD,
                payload: response.data,
            });

            return Promise.resolve();

        } catch (error) {
            console.log("Error fetch list :", error);
            return Promise.reject();
        }
    };
