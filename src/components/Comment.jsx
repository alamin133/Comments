import React, { useState } from 'react';
import classes from './Comment.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faMinus,faReply } from '@fortawesome/free-solid-svg-icons';


export default function Comment({img,number,name,time,text,onClick,onClicks}) {
    
    return (
        <div className={classes.comment}>
           <div className={classes.comment_field}>
               <div className={classes.comment_left}>
               <FontAwesomeIcon icon={ faPlus }onClick={onClick}/>
               <h2>{number}</h2>
               <FontAwesomeIcon icon={ faMinus }onClick={onClicks}/>
               </div>
               <div className={classes.comment_right}>
                   <div className={classes.comment_header}>
                      <div className={classes.header_profile}>
                      <img className={classes.comment_img}src={img}alt=""/>
                       <h2>{name}</h2>
                       <h3 className={classes.time}>{time}</h3>
                      </div>
                       <div className={classes.comment_header_icon}>
                       <FontAwesomeIcon icon={ faReply }className={classes.icon}/>
                       <h3>Reply</h3>

                       </div>
                   </div>
                   <p className={classes.para}>{text}</p>

               </div>

           </div>
        </div>
    )
}
