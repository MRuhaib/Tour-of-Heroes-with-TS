import HeroList from "./heroList";
import useFetch from "./useFetch";
import hero from "./heroProp";

const Heroes: React.FC = (): JSX.Element => {
  const {data: heroes, isPending, error} = useFetch<hero[]>('http://localhost:8000/heroes');
  
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { heroes && <HeroList heroes={heroes} /> }
    </div>
  );
}
 
export default Heroes;