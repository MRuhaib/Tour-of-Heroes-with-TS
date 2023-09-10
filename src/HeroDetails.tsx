import { useHistory, useParams } from "react-router-dom";
import { FormEvent, useState } from "react";
import useFetch from "./useFetch";
import hero from "./heroProp";

const HeroDetails: React.FC = (): JSX.Element => {
    const {id} = useParams<{ id: string }>();
    const {data:hero, isPending, error} = useFetch<hero[]>('http://localhost:8000/heroes/' + id)
    const History = useHistory();
    const [name, setName] = useState<string | null>('');
    const [isPending2, setIsPending] = useState<boolean>(false);
    const handleDelete = async () =>{
    
        try{
            let res = await fetch('http://localhost:8000/heroes/' + id, {
                method: 'DELETE'
            })
            alert('Deleted that hero!')
            History.push('/');
        } catch(err) {
            console.error(err);
        };
    };
    const handleUpdate = async(e: FormEvent)=>{
        e.preventDefault();
        const hero = {name}
        setIsPending(true)
        try{
            let res = await fetch('http://localhost:8000/heroes/' + id, {
                method: 'PATCH',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(hero)
            })
            setIsPending(false);
            History.push('/');
            alert('Updated that hero\'s name!');
        }catch(err){
            console.error(err);
        };
    }
    
    return ( 
        <div className="hero-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {hero && (
                <article>
                    <h2>ID Number: {hero.id}</h2>
                    <h1>Name: {hero.name}</h1>
                    <img src={hero.image}></img><br></br>
                    <button onClick ={handleDelete}>Delete</button>
                    <br></br>
                    <br></br>
                    <h2>Update Hero's Name:</h2>
                    <form onSubmit = {handleUpdate}>
                        <label>New Name:</label><br></br>
                        <input 
                        type="text" 
                        required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        /><br></br>
                        {!isPending2 && <button>Update Name</button>}
                        {isPending2 && <button disabled>Updating...</button>}
                    </form>
                </article>
                
            )} <br></br>

            {/* {top4.includes(hero) && <button>Remove this hero from your top four</button>}
            {!top4.includes(hero) && <button>Add this hero to your top four</button>}    */}

        </div>
     );
}
 
export default HeroDetails;