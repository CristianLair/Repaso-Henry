import React from 'react';
import { useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { runCharacters } from '../redux/actions';
import  {runEpisode} from '../redux/actions';
import Card from './card';
import style from './css/card.module.css'
export default function Home(){

const dispatch = useDispatch()
const allCharacter = useSelector((state) => state.chars)
const allEpisode = useSelector((state)=> state.episode)
console.log('probando',allCharacter)
console.log('prueba episode',allEpisode)


const[currentPage,setCurrentPage]= useState(1) 
const[characterPerpage,setRecipesPerPage] = useState(10) 
const indexOfLastRecipes = currentPage * characterPerpage 
const indexOfFirstRecipe = indexOfLastRecipes - characterPerpage 
const currentCharacters = allCharacter.slice(indexOfFirstRecipe,indexOfLastRecipes)
const currentEpisode = allEpisode.slice(indexOfFirstRecipe,indexOfLastRecipes)
let prueba = currentEpisode.map(e => e.name)
let variable = Math.floor(Math.random()*prueba.length)
console.log('prueba variable', variable)
console.log('prueba concat',prueba)

useEffect(()=>{
    dispatch(runCharacters(),
    dispatch(runEpisode())
    )
},[currentPage, dispatch])

let count = -1;
return (
    <div>
        <div>
            <h5 className={style.title}>Rick And Morty Api</h5>
            <div>
            <Link type='button' to='/createCharacter'>
            <button>Create tu personaje</button>
            </Link>
            { currentCharacters?.map((e)=>{
                if(count < 20){
                    count++
                }else{
                    count = 0
                }
                return(
                    <div className={style.card}>
                    <Card 
                name={e.name} 
                image={e.image}
                species={e.species}
                origin={e.origin.name}
                episode={prueba[count]}
           
           />
               
                    </div>)
            })
            }
            </div>
           
        </div>
    </div>
)
}