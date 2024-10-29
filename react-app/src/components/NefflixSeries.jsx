import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

const NetflixSeriex = () => {
  return (
    <ul className="container">
      {seriesData.map((element) => (
        <SeriesCard key={element.id} data={element} />
      ))}
    </ul>
  );
};

export { NetflixSeriex };


