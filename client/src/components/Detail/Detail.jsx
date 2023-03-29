import { getDogDetail } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { React, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Detailcard from './Detailcard'
import style from './Detail.module.css'

const Detail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const detailDog = useSelector((state) => state.getDetail);


    useEffect(() => {
        dispatch(getDogDetail(id))
        console.log("llegue", detailDog)

    }, [dispatch,id])
    return (
        <div className={style.container}>
            {
                detailDog.map((dog, index) => {
                    return (
                        <>
                            {
                                dog.Temperaments

                                    ? dog.Temperaments.map((db, index) => {
                                        return (
                                            <>
                                                <Detailcard
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
                                        <Detailcard
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

        </div>

    )
}

export default Detail