import React, {useState} from 'react'
import "./search.css";
export default function Search() {
    const [query, setQuery] = useState("");

    const handleInputChange = (event) =>{
        setQuery(event.target.value);
    }

  return (
    <div>
        <input
            type = "text"
            placeholder = "Search brands..."
            value = {query}
            onChange = {handleInputChange}
        />
    </div>
  )
}
