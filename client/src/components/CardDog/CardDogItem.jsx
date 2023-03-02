import style from './CardDogItem.module.css'
const CardDogItem = ({ key, id, image, name, height, weight, life_span, temperament }) => {
    return (
        <div className={style.card} key={key}>

            <h1>{id}</h1>
            <img className={style.img} src={image}></img>
            <h2>{name}</h2>
             <p>{height}</p>
            <p>{weight}</p>
            <p> {life_span}</p>
            <p>{temperament}</p> 

        </div>

    )
}

export default CardDogItem