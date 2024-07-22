import { useEffect, useState } from "react";
import Gitcard from "./GItcard";
import "./git.css"

export default function Github() {
  const [username, setusername] = useState("thapatechnical");
  const [userdata, setuserdata] = useState(null);
  const[Loading ,setloading] = useState(false);
  const handlesubmit = () => {
    fetchgithub();
  };

  const fetchgithub =async ()=>{
    setloading(true);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    if(data){
        setuserdata(data)
        setloading(false);
        setusername("");
    }
    console.log(data)
  }
  useEffect(()=>{
    fetchgithub();
  }, []);

  if(Loading){
    return <h1>Loading....Please Wait </h1>
  }
  return (
    <div className="gitprofile">
      <div className="input_wrapper">
        <input
          type="text"
          placeholder="Github Username"
          id="username"
          name="searchbyusername"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <button onClick={handlesubmit}>Search</button>
      </div>
      {
        userdata!==null ?
        <Gitcard user = {userdata}/>
         : null
      }
    </div>
  );
}
