import React from 'react'


export default function Card({name,image,species,origin,episode}){
    return ( 
        <div >
          <div >
            <figure>
              <img src={image} alt="img not found" />         
            </figure>
            <div>
              <h3 >{name}</h3>
              <h3> {species} </h3>
              <h3> {origin} </h3>
              <h3 >{episode}</h3>
            </div>
          </div>
        </div>
      );

}