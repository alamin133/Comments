import React from 'react';
import classes from './Input.module.css';


export default function Input({img,name,button}) {
    return (
        <div className={classes.input}>
            <div className={classes.field}>
               <div className={classes.inputField}>
               <div className={classes.profile}>
                <img className={classes.img}src={img}alt =""/>
                <h3>{name}</h3>
                </div>
                <input type="text"placeholder='Write a comment'/>
                <button>{button}</button>
               </div>
            </div>
            
        </div>
    )
}
