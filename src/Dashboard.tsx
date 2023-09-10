import useFetch from "./useFetch";
import { Link } from "react-router-dom/";
import hero from "./heroProp";

const Dashboard: React.FC = (): JSX.Element => {
    const {data, isPending, error} = useFetch<hero[]>('http://localhost:8000/heroes')
    let top4: hero[]|undefined = data?.slice(0,4);
    return ( 
    <div className="dashboard">
        <h2>Your top heroes:</h2>
        {top4?.map((hero) => (
          <div className="hero-preview" key={hero.id} >
            <Link to={`/heroes/${hero.id}`}>
            <h2>{ hero.name }</h2>
            </Link>
          </div>
        ))}
    </div> 
    );
}
 
export default Dashboard;