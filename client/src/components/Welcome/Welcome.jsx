import React from 'react'
import { Link } from "react-router-dom";
import style from "./welcome.module.css"
import img from "../../img/dog.png"

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
                <div className={style.containerbtn}>
                    <button className={style.btn}>
                        <Link to='/home' className={style.link} >Start</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Welcome