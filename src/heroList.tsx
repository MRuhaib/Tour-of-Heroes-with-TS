import { Link } from "react-router-dom";
import hero from "./heroProp"

const HeroList: React.FC <{heroes:hero[]}> = ({ heroes }): JSX.Element => {
    return (
      <div className="hero-list">
        <h2>All of the heroes available in your roster:</h2>
        {heroes.map((hero:any) => (
          <div className="hero-preview" key={hero.id} >
            <Link to={`/heroes/${hero.id}`}>
            <h2>{ hero.name }</h2>
            </Link>
          </div>
        ))}
      </div>
    );
  }
   
  export default HeroList;