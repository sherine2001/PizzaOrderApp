import react from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


function Homescreen() {
  const [rooms, setRoom] =useState([]);
  const [loading,setloading]=useState()
  const [error,seterror]=useState()

  useEffect(async () => {
    try {
      setloading(true)
      const data = await (await axios.get("/api/rooms/getallrooms")).data;
      setRoom(data)
      setloading(false)
    } catch (error) {
      seterror(true)
      console.log(error);
      setloading(false)
    }
  }, []);

  return (
    <div>
        {loading ? (<h1>Loading....</h1>) : error ? (<h1>Error</h1>) :(rooms.map(room =>{
          return <h1>{room.name}</h1>
        }))}
    </div>
  )
}

export default Homescreen;
