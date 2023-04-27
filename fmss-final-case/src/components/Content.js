import {useState} from 'react'
import Card from './Card'
import { useStarwars } from '../contexts/StarwarsContext'
import axios from "axios";

function Content() {
  const{starships,setStarships,loading,next,setNext}=useStarwars();
  const[loadmore,setLoadmore]=useState(false)
  async function fetchMore(){
      setLoadmore(true)
    try{
      const {data}=await axios.get(next);
      data ? setNext(data.next):setNext("")
      if(data.results){
        const filteredData=data.results.map((starship)=>{
          return{
            id:starship.url,
            name:starship.name,
            model:starship.model,
            hyperdrive_rating:starship.hyperdrive_rating
          } 
        })
        setStarships(pre=>[...pre, ...filteredData])
        setLoadmore(false)
      }
    }
    catch(e){
      console.log(e)
    }
  }

  return (
    <>
      <div className='container'>
        {
          loading ? (
          <div className="loader-container">
            <div className='loader'></div>
          </div>
          ):(
            starships.map((starship,index)=>(
              <Card key={index} starship={starship}/>
            ))
          )  
        }    
      </div>
      {
        next && <div className="load-more">
                  <button onClick={()=>{fetchMore();}}>{loadmore?"Loading...":"Load More"}</button> 
                </div>
      }
    </>
  )
}

export default Content