import {useEffect,useState} from 'react'
import { useParams,Link } from 'react-router-dom'
import axios from "axios";
import "./detail.css"

function Detail() {
  const {id}=useParams();
  const [starship,setStarship]=useState([])

  useEffect(() => {
    //gelen id değerine göre fetch isteği yapıldı
    async function fetchStarship(){
      const data=await axios.get(`https://swapi.dev/api/starships/${id}`)
      setStarship(data.data)
    } 
    fetchStarship();  
  }, [])
  console.log(starship)

  return (
    <div className='detail-container'>
      <Link to="/" className='go-back'><button><i class="fa-solid fa-arrow-left"></i></button></Link>
      <div className="detail-card">
       <div className="card-header">
          <h2>{starship.name}</h2>
          <hr />
       </div>
       <div className="card-body">
          <div className="card-image">
            <img src="https://newbiedm.files.wordpress.com/2010/08/falcon.gif" alt="" />
          </div>
          <div className="card-info">
           <table>
           <tr>
              <td><b>Model : </b></td>
              <td>{starship.model} </td>
            </tr>
            <tr>
              <td><b>Hyperdrive rating : </b></td>
              <td>{starship.hyperdrive_rating}</td>
            </tr>
            <tr>
              <td><b>Passengers : </b></td>
              <td>{starship.passengers}</td>
            </tr>
            <tr>
              <td><b>Max Atmosphering Speed :</b></td>
              <td>{starship.max_atmosphering_speed}</td>
            </tr>
            <tr>
              <td><b>Manufacturer : </b></td>
              <td>{starship.manufacturer}</td>
            </tr>
            <tr>
              <td><b>Crew : </b></td>
              <td>{starship.crew}</td>
            </tr>
            <tr>
              <td><b>Cargo Capacity : </b></td>
              <td>{starship.cargo_capacity}</td>
            </tr>
           </table>
          </div>
       </div>
      </div>
    </div>
  )
}

export default Detail