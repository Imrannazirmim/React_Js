import { useEffect, useState } from "react";


export const MainApiHandle = () => {
    const API = 'https://pokeapi.co/api/v2/pokemon/';

    const [apiData, setApiData] = useState([]);
    

    const getDataPokemon = async () => {
        try{
            const respone = await fetch(API);
            const data = await respone.json();
            console.log(data)
            const dataValue = data.results;
            console.log(dataValue)
            setApiData(dataValue)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getDataPokemon()
    }, [])
    return(
        <>
            {
                apiData.map((currentEl) => {
                    return <div key={currentEl.name}>
                        <h2>{currentEl.name}</h2>
                        <img src={currentEl.url} alt="" />
                    </div>
                })
            }

        </>
    )
}