import { useEffect, useState } from "react";

const useFetch = <T>(url: string): {data: T|null, isPending: boolean, error: string|null} =>{
    const [data, setData] = useState<T|null>(null);
    const [isPending, setIsPending] = useState<boolean>(true);
    const [error, setError] = useState<string|null>(null);
  
    useEffect(() => {
      const abortCont = new AbortController();
      let getData = async() =>{
        try {
          let res = await fetch(url, {signal:abortCont.signal})
          if (!res.ok) {
            throw Error('could not fetch the data for that resource');
          };
          let data = await res.json();
          setIsPending(false);
          setData(data);
          setError(null);
        } catch(err:any) {
          if (err.name === 'AbortError'){
            console.log('Fetch aborted.')
          }else{
            setIsPending(false);
            setError(err.message);
          };
        };
      };
    getData();
    return () => abortCont.abort();
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;