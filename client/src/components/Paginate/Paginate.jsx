import React from 'react' 
import style from './Paginate.module.css' 

const Paginate = ({totalPosts , postsPerpage}) => {  
    let pages = [] 

    for(let i = 1; i<= Math.ceil( totalPosts / postsPerpage); i++){ 
        pages.push(i)
    
    }
    return (
        <div>  
            
           {pages.map((page, index) =>{ return <button key={index}>{page}</button>})}
        </div>
    )
}

export default Paginate