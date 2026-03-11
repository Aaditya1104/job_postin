import React from 'react'
import { Bookmark } from "lucide-react";

const Card = (props) => {
    //console.log(props.company)
  return (
    
    
      
      <div className='card'>
        <div>
          <div className='top'>
          <img src={props.logo}  alt="" />
          <button>Save<Bookmark size={11}/></button>
        </div>
        <div className='middle'>
          <h3>{props.company} <span>{props.posted}</span></h3>
          <h2>{props.role}</h2>
          <div className='tag'>
            <h4>{props.duration}</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        </div>
        <div className='bottom'>
          <div>
            <h3>${props.pay}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
      
    
    
  )
}

export default Card
