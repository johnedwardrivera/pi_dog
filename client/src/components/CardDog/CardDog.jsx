import { useDispatch, useSelector } from "react-redux";
import { React, useEffect, useState } from "react";
import { Alldogs } from '../../redux/actions'
import CardDogItem from './CardDogItem'
import Paginate from '../Paginate/Paginate'
import style from './CardDog.module.css'

const CardDog = () => {
    const dispatch = useDispatch();
    const dogs = useSelector((state) => state.getAlldogs);
    //paginacion  
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerpage, setPostsPerpage] = useState(8)

    useEffect(() => {
        dispatch(Alldogs())
        console.log("hola ", dogs)
    }, [])
    //paginacion 
    const lastPostIndex = currentPage * postsPerpage
    const firstPostIndex = lastPostIndex - postsPerpage
    const currentPosts = dogs.slice(firstPostIndex, lastPostIndex)

    return (
        <div className={style.container}>
            {
                currentPosts.map((dog, index) => {
                    return (
                        <>
                            {
                                dog.Temperaments

                                    ? dog.Temperaments.map((db, index) => {
                                        return (
                                            <>
                                                <CardDogItem
                                                    key={index}
                                                    id={dog?.id}
                                                    image={dog?.image}
                                                    name={dog?.name}
                                                    height={dog?.height}
                                                    weight={dog?.weight}
                                                    life_span={dog?.life_span}
                                                    temperament={db?.name}
                                                />
                                            </>
                                        )
                                    })

                                    :
                                    <>
                                        <CardDogItem
                                            key={index}
                                            id={dog?.id}
                                            image={dog?.image.url}
                                            name={dog?.name}
                                            height={dog?.height.imperial}
                                            weight={dog?.weight.imperial}
                                            life_span={dog?.life_span}
                                            temperament={dog?.temperament}
                                        />
                                    </>
                            }


                        </>

                    )

                })

            }
            <div style={{backgroun:'black'}}>
                <Paginate totalPosts={dogs.length} postsPerpage={postsPerpage} />
            </div>


        </div>

    )
}

export default CardDog;