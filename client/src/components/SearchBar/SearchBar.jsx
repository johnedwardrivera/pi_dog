import React from 'react' 
import style from './searchBar.module.css'
const SearchBar = () => {
    return (
        <div className={style.container}>
            <input className={style.input} type="search" placeholder='search dogs' />
            <button className={style.btn} >
                look for
            </button>
        </div>
    )

}
export default SearchBar