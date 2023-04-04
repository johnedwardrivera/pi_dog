import { Link } from 'react-router-dom'
import style from './Detailcard.module.css'
const Detailcard = ({ id, image, name, height, weight, life_span, temperament }) => {
    return (
        <div className={style.detailcard}>
            <h1>{id}</h1>
            <img className={style.img} src={image}></img>
            <h2>{name}</h2>
            <p>{height}</p>
            <p>{weight}</p>
            <p> {life_span}</p>
            <p>{temperament}</p>
            <Link to={'/home'}>
                <button className={style.btn}>Home</button>
            </Link>
        </div>

    )


}

export default Detailcard