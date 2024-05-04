import React from 'react'
import "./search.scss"
import { BiSearch } from 'react-icons/bi'

const Search = ({value, onChange}) => {
  return (
    <div className="search">
        <BiSearch size={18} className='icon'/>
        <input type="text" placeholder='Search Users' value={value} onChange={onChange}/>
    </div>
  )
}

export default Search