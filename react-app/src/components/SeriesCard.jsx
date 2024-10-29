/* eslint-disable react/prop-types */
import '../css/NetflixCard.css'
const SeriesCard = ({data}) => {

      const { id, img_url, name, rating, description, genre, cast, watch_url } = data;

      const ratingClass = rating >= 8.5 ? 'high' : 'low';

     return (
       <li className="card">
         <div>
           <img src={img_url} alt="image" width="40%" height="40%" />
         </div>
         <h2>Name: {name}</h2>
         <h3>
           Rating: <span className={`rating ${ratingClass}`}>{rating}</span>
         </h3>
         <p>Summary: {description} </p>
         <p>Genre: {genre} </p>
         <p>Cast: {cast}</p>
         <a href={watch_url} target="_blank">
           <button>Watch Now</button>
         </a>
       </li>
     );
}

export {SeriesCard}