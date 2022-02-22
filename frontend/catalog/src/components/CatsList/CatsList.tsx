import { useTypedSelector } from "../../hooks/useTypeSelector";
import { useEffect, useState } from "react";
import { useActions } from "../../hooks/useAction";
import { ICatModel, ISearchCatByColour } from '../CatsList/types';
import { useNavigate } from "react-router";



const CatsList: React.FC = () => {

    const { cats } = useTypedSelector((store) => store.catty);
    const { fetchAllKitty, fetchByColour ,fetchByCharacter,addToCard} = useActions();    
    const navigator = useNavigate();    
    const [query, setQuery] = useState<string>(window.location.search);

    async function getByColor(search: ISearchCatByColour) {

        try {
            await fetchByColour(search);

        } catch (ex) {
            console.log("Error fetch by colour:", ex);

        }
    }

    async function getByCharacter(search: ISearchCatByColour) {

        try {
            await fetchByCharacter(search);

        } catch (ex) {
            console.log("Error fetch by character:", ex);

        }
    }

    useEffect(() => {
        const params = new URLSearchParams(query);
        const colores = params?.get("colour") ?? "";
        const character = params?.get("character") ?? "";
                     
        if (colores) {
            const coloursearch: ISearchCatByColour = {

                colour: colores
            }
            getByColor(coloursearch);
        }
        else if(character){

            const charsearch: ISearchCatByColour = {

                character: character
            }
            getByCharacter(charsearch); 
        }
        else{
            fetchAllKitty(); 
        }
    }, [query]);

    const onHandleSubmit = (e: any) => {

        e.preventDefault();
        const color = (document.getElementById("searchColour") as HTMLInputElement).value;
        const character = (document.getElementById("searchCharacter") as HTMLInputElement).value;
       
        if (color || color.length > 0) {
            setQuery("?colour=" + color);
            navigator("?colour=" + color);
        }

        if (character || character.length > 0) {
            setQuery("?character=" + character);
            navigator("?character=" + character);
        }
    }

    const AddToCard = (item:ICatModel) => {        
         try {        
           
             addToCard(item);              
               
         }
         catch (error) {
             console.log("Server is bad ", error);
         }         
       };

    return (
        <>

            <h1 className="text-center mt-3">Список котів,щоб обрати собі</h1>
            <form className="form-control-sm" onSubmit={onHandleSubmit}>
                <input
                    id="searchColour"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button className="btn btn-outline-primary btn-sm ms-2"
                    type="submit">
                    По кольору
                </button>
                <input
                    className="float-end"
                    id="searchCharacter"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button className="btn btn-outline-primary btn-sm me-2 float-end " type="submit">
                    По характеру
                </button>

            </form>
            {<table className=" table table-bordered mt-5" style={{ borderColor: '#00008B' }}>
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Colour</th>
                        <th scope="col">Character</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
                {<tbody>
                    {cats.map((item) => {
                        return (
                            <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.colour}</td>
                                <td>{item.character}</td>
                                <td>
                                    <div className="mx-5">
                                        <button className="btn btn-info" onClick={(e) => {AddToCard(item)}}>В кошик</button>                                       
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>}
            </table>}

        </>
    )
}
export default CatsList;