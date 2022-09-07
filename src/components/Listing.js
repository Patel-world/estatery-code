import React, { useState,useRef,useEffect } from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { HiSparkles } from "react-icons/hi";
import { MdSingleBed } from "react-icons/md";
import { TbBath } from "react-icons/tb";
import { AiOutlineCodepen } from "react-icons/ai";

const Listing = ({data}) => {
    
   const [color,setColor]=useState([])
    var da={...data}
   
    const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // 👈️ return early if first render
    }

    color.forEach(e=>{
      document.getElementById(e).fill='red'
      document.getElementById(e).border='1px solid red'
    })
    console.log(color)
  }, [color]); 
    
  return (
    <div className='g3'>
        {Object.values(da).map((user,i) => (
        <div key={i} className="card"><img src={user.src}></img>
        <div className={user.trend=='popular'?'popular':'qaz'}><HiSparkles id='ff'/><h5>popular</h5></div>
        <div className='startf'><div className='startd'>
          <h3>{user.rent}</h3><p className='spc'>/month</p></div>
          <div className='circle'>
            <AiOutlineHeart onClick={()=>{color.indexOf(user.rent)==-1?setColor([...color,user.rent]):setColor([...color.slice(0,color.indexOf(user.rent)),...color.slice(color.indexOf(user.rent)+1,color.length)])}} fill={color.indexOf(user.rent)!=-1?'red':'rgb(112 102 232)'} id={user.rent} /></div></div>
        <div><h2>{user.title}</h2></div>
        <div><p className='address'>{user.address}</p></div>
        <div className='g31'>
          <div className='fl'><MdSingleBed id="small"/><p className='spcl'>{user.beds}</p></div>
          <div className='fl'><TbBath id='asdf'/><p className='spcl'>{user.bathrooms}</p></div>
          <div className='fl'><AiOutlineCodepen id="small"/><p className='spcl'>{user.area}</p></div>
        </div>
        </div>
        
      ))}
      
    </div>
  )
}

export default Listing