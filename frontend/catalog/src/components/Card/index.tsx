import { useTypedSelector } from "../../hooks/useTypeSelector";
import { useEffect, useState } from "react";
import { useActions } from "../../hooks/useAction";

const Card: React.FC = () => {

    const { catsInCard } = useTypedSelector((store) => store.cardCats);
    const {fetchCard} = useActions();    
   
    useEffect(() => {
        fetchCard();
    }, []);


    return (
        <>
            <h1>Card</h1>
            {<table className="table">
                <thead className="table table-bordered">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Color</th>
                        <th scope="col">Character</th>
                    </tr>
                </thead>
                <tbody>
                    {catsInCard.map((item) =>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.colour} </td>
                            <td>{item.character} </td>
                        </tr>)}
                </tbody>

            </table>}

        </>
    );

};
export default Card;
