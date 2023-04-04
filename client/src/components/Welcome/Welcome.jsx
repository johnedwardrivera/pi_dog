import React from 'react'
import { Link } from "react-router-dom";
import style from "./welcome.module.css"
import img from "../../img/dog.png"
import img2 from "../../img/Gifs animados de perros.gif"

const Welcome = () => {
    return (


        <div className={style.container}>


            <div className={style.welcome}>
                <img src={img} style={{
                    width: '220px',
                    height: '220px',
                    float: 'left',
                    position: 'relative',
                    top: '25em'
                }} ></img >
                <h1 className={style.h1}>Welcome </h1>

                <h2 className={style.p} htmlFor=""> Encuentra tu perro Ideal</h2>

                <div className={style.containerbtn}>

                    <div className={style.btn}>
                        <Link to='/home' className={style.link} >
                            <img src={img2} style={{
                                width: '320px',
                                height: '320px',
                                position: 'relative',
                                top: '5em'
                            }} alt="" />
                        </Link>
                        <div className={style.iniciar}>
                            <h1> Start </h1>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Welcome