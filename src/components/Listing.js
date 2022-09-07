import React, { useState } from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { HiSparkles } from "react-icons/hi";
import { MdSingleBed } from "react-icons/md";
import { TbBath } from "react-icons/tb";
import { AiOutlineCodepen } from "react-icons/ai";

const Listing = ({data}) => {
    
   
    var da={...data}
    const [abc, setAbc]=useState([])
    var xcv=[];
    if(localStorage.getItem('fill')!='[]'){
      xcv = JSON.parse(localStorage.getItem('fill'))
    }
    setAbc(xcv)
    
    
    
  return (
    <div className='g3'>
        {Object.values(da).map((user,i) => (
        <div key={i} className="card"><img src={user.src}></img>
        <div className={user.trend=='popular'?'popular':'qaz'}><HiSparkles id='ff'/><h5>popular</h5></div>
        <div className='startf'><div className='startd'><h3>{user.rent}</h3>
        <p className='spc'>/month</p></div>
        <div className='circle' 
        onClick={()=>{abc.indexOf(user.rent)==-1?xcv[i]['fill']='red':abc.splice(abc.indexOf(user.rent)-1,1);console.log(xcv[i])}}>
          <AiOutlineHeart fill={xcv[i]?xcv[i]['fill']:'rgb(112 102 232)'} id='heart'/></div></div>
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