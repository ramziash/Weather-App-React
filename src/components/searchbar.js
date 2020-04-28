import React, { useState } from 'react'


const Search = ( {getCity} ) => {

    const [cityReq, setCityReq] = useState('');

    const onClickEvent= event => {
        if (cityReq === '') {
            return alert('Input invalid')
        } else{
            event.preventDefault(); // prevents a browser from reloading the page.
            getCity(cityReq); // upon clicking, run getCity.
            setCityReq(''); // to empty it for a new entry.
        }

    };
    
    return (

        <div className = 'searchBarStyle'>

            <input className ='inputStyle' placeholder = 'Input City' type='text' value = {cityReq} onChange = {event => {
                setCityReq(event.target.value);
            }} 
            /> 

            <button className = 'buttonStyle' onClick = {onClickEvent} >Search</button>

        </div>

    )

}

export default Search;
