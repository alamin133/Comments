import classes from './App.module.css';
import Comment from './components/Comment';
import image from '../src/images/brad.jpg';
import image2 from '../src/images/Nayem.jpg';
import image3 from '../src/images/course-capture.png';
import image4 from '../src/images/mosh-hamedani-v1.jpg'
import { useState } from 'react';
import Input from './components/Input';
import image5 from '../src/images/me.jpg'


function App() {
  const[count,setCount]=useState(0);


  const HandleClick=()=>{
    setCount(count +1)
  }
  const Increment=()=>{
    setCount(count -1)
  }


  return (
    <div className={classes.app}>
     
       
       <Comment img={image}number={count}onClick={HandleClick}onClicks={Increment}
       name="Brad"time ="1 Months Ago"text="My life’s mission is to help novice and professional software engineers increase their skills, make more money, and ultimately change their lives for the better. Assumenda eligendi explicabo laudantium culpa
       Nesciunt animi suscipit consectetur neque dolorem magnam? Assum"
       
       />
       
       
       <Comment img={image2}number={count}onClick={HandleClick}onClicks={Increment}
       name="HM Nayem"time="2 Weeks Ago"text="I was started learning technology since 2011 and till now I am studing. I love to learn new technologies also I love to teach people about new technology.
       That's why I found 'Twinkle Cats'. Currently I am trying to produce some quality content both free and premium."
       />
       
       <Comment img={image3} number={count}onClick={HandleClick}onClicks={Increment}
       name="Brad" time="1 Week Ago"text="My life’s mission is to help novice and professional software engineers increase their skills, make more money, and ultimately change their lives for the better. Assumenda eligendi explicabo laudantium culpa
       Nesciunt animi suscipit consectetur neque dolorem magnam? Assum"
       />
       
       
       <Comment img={image4}number={count}onClick={HandleClick}onClicks={Increment}
       name="Mosh"time ="2 Days Ago"text="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       Nesciunt animi suscipit consectetur neque dolorem magnam? Assumenda eligendi explicabo laudantium culpa
       Nesciunt animi suscipit consectetur neque dolorem magnam? Assumenda eligendi explicabo laudantium culpa?"
       />
       
       <Input img={image5} name="Me"button="Send"/>

     </div>

    
  );
}

export default App;
