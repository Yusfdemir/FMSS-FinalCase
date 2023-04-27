import React from 'react'
import { Link } from 'react-router-dom';

function Card({starship}) {
  return (
    <div className='card-container'>
        <div className="card-header">
          <img src="https://newbiedm.files.wordpress.com/2010/08/falcon.gif"alt="" />
        </div>
        <div className="card-body">
          <h3>{starship.name}</h3>
          <p><b>Model: </b>{starship.model}</p>
          <p><b>Hyperdrive-rating: </b>{starship.hyperdrive_rating}</p>
          {/*her bir starshipin url'inden o starship'in id sini split metodu yardımıyla aldım 
          mesela https://swapi.dev/api/starships/9/ url'i "/" karakteri ile split edilince arrayin 5. elemanı bize id olan 9 u verir  */}
          <Link to={`/detail/${(starship.id).split("/")[5]}`}>
            <button>Detail</button>
          </Link>
        </div>
    </div>
  )
}

export default Card