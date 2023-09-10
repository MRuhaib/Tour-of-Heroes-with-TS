import { FormEvent, useState } from "react";
import {useHistory} from 'react-router-dom';

const Create: React.FC = (): JSX.Element => {
    const History = useHistory();
    const [name, setName] = useState<string | null>('');
    const [image, setImage] = useState<string | null>('');
    const [isPending, setIsPending] = useState<boolean>(false);

    const handleSubmit = async(e: FormEvent)=>{
        e.preventDefault();

        setIsPending(true)
        try{
            let res = await fetch('http://localhost:8000/heroes/', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({name, image})

            })
            setIsPending(false);
            History.push('/');
            alert('Added successfully!');
        }catch(err){
            console.error(err);
        };
    }
    return ( 
        <div className="create">
            <h2>Add a new hero!</h2>
            <form onSubmit = {handleSubmit}>
                <label>Hero's Name:</label><br></br>
                <input 
                type="text" 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
                /><br></br>
                <label>Hero's Image - enter image URL:</label><br></br>
                <input 
                type="text" 
                required 
                value={image}
                onChange={(e) => setImage(e.target.value)}
                />
                {!isPending && <button>Add Hero</button>}
                {isPending && <button disabled>Adding...</button>}
            </form>           
        </div>
     );
}
 
export default Create;