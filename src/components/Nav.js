import React, { useState } from 'react'
import { RiHomeSmile2Fill } from "react-icons/ri";

const Nav = () => {

    const [toggle, setToggle]=useState(true)
    console.log(toggle)
    const handleToggle=()=>{
        console.log(toggle)
        
        if(toggle){

            document.querySelector('#qw').classList.remove('hidden')
            document.querySelector('#qw').classList.remove('g2')
            document.querySelector('#qwr').classList.add('hid')
            document.querySelector('#que').classList.remove('g2')

            setToggle(false)
        }
        else{
            document.querySelector('#qw').classList.add('hidden')
            document.querySelector('#qw').classList.add('g2')
            document.querySelector('#qwr').classList.remove('hid')
            document.querySelector('#que').classList.add('g2')
            setToggle(true)
        }

    }
  return (
    <div id="que" className="grid2 g2">
        <a href="#" onClick={handleToggle}><div id="qwr" className='nav-button bold disp'><RiHomeSmile2Fill id="logo"/>Estatery</div></a>
        <div id="qw" className="flex hidden g2">
        <div className="inline">
          <a href="#" onClick={handleToggle}><div className='nav-button bold'><RiHomeSmile2Fill id="logo"/><h3>Estatery</h3></div></a>
          <a href='#'><div className="nav-button active">Rent</div></a>
          <a href='#'><div className='nav-button'>Buy</div></a>
          <a href='#'><div className='nav-button'>Sell</div></a>
          <div className='nav-button' >
            <select>
                <option defaultValue>Manage Property</option>
            </select>
          </div>
          <div className='nav-button'>
          <select>
                <option defaultValue>Resources</option>
            </select>
          </div>
        </div>
        <div className="inline">
          <a href='#'><div className='nav-button'>Login</div></a>
          <a href='#'><div className='nav-button'>Sign up</div></a>
        </div>
        </div>
    </div>
  )
}

export default Nav