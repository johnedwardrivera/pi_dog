import style from './CardDogItem.module.css'
import { Link } from 'react-router-dom'
const CardDogItem = ({ key, id, image, name, height, weight, life_span, temperament }) => {
    return (
        <div className={style.card} key={key}>
            <h1>{id}</h1>
            <img className={style.img} src={image}></img>   
            <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
            </Link> 
            <p>{height}</p>
            <p>{weight}</p>
            <p> {life_span}</p>
            <p>{temperament}</p>    
        </div>  
    )
}

export default CardDogItem