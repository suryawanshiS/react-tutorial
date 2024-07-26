import React from 'react'
import '../App.css'


function Button(props){
    console.log(props)
    return(
        <div style={{display:"flex", flexDirection:"column"}}>
        <button className='BTN'>{props.data}</button>
        </div>


    )

}





export default Button