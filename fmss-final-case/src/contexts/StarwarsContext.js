import { createContext,useContext,useEffect,useState,useCallback } from "react";
import axios from "axios";

const StarwarsContext=createContext();

export const StarwarsProvider=({children})=>{
    const [search,setSearch]=useState("");
    const [isClicked,setIsClicked]=useState(false);
    const [starships,setStarships]=useState([]);
    const [loading,setLoading]=useState(true);
    const [next,setNext]=useState("")
    // Fetch iteği atıldı
    const fetchStarships=useCallback(async()=>{
        setLoading(true)
        try{
            const {data}=await axios.get(`https://swapi.dev/api/starships/?search=${search}`)
            //varsa bir sonraki sayfanın url'i next'e atandı
            data ? setNext(data.next):setNext(null)
            if(data.results){
                const filteredStarships=data.results.map((starship)=>{
                    return{
                        id:starship.url,
                        name:starship.name,
                        model:starship.model,
                        hyperdrive_rating:starship.hyperdrive_rating
                    }
                })
                setStarships(filteredStarships)
                setLoading(false)
                setSearch("")
            }
            else{}    
        }catch(error){
            console.log(error)
        }
    },[search])

    useEffect(()=>{
        fetchStarships();    
        setIsClicked(false)
    },[isClicked])

    const values={search,setSearch,setIsClicked,starships,setStarships,loading,next,setNext}

    return <StarwarsContext.Provider value={values}>{children}</StarwarsContext.Provider>
}

export const useStarwars=()=> useContext(StarwarsContext);