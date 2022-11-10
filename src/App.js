import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const [data,setData]=useState([])
  console.log("apiresdata",data)
  const fetchData=async()=>{
    const res=await fetch(`https://jsonplaceholder.typicode.com/users`)
    console.log(res)
    const resData=await res.json()
    
    setData(resData)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
   <div className='text-gray-900 '>
    {data.map((item)=>(
      <div key={item.id} className='border m-8'>
        <p>NAME : {item.name}</p>
        <p>CITY : {item.address.city}</p>
        </div>
    ))}
   </div>
  );
}

export default App;
