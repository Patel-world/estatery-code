import React from 'react'
import Select from '../Views.js/Select'
import property from '../data/Property'

import { IoIosArrowDropdownCircle } from "react-icons/io";

const Search = () => {
  return (
    <div className='search-span'>
        <div className='flend'>
            <Select defaultValue="Search with search Bar" location={property}/><IoIosArrowDropdownCircle id='qsd'/>
        </div>
    </div>
  )
}

export default Search