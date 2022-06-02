import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { runEpisode } from "../redux/reducer";
import { runCharacters } from "../redux/actions";
import { newChar } from "../redux/actions";
export function CreateCharacter (){

const dispatch = useDispatch()
const listEpisodes = useSelector((state)=> state.episode)

const [error,setErrors] = useState({})
const [input,setInput] = useState({
name:'',
origin:'',
species:'',
image:'',
episode:[]


})
useEffect(()=>{

dispatch(runCharacters())

},[dispatch])


function handleSubmit(e){
    e.preventDefault();
    dispatch(newChar());
    alert('Personaje agregado correctamente');
    setInput({
        name:"",
        origin:"",
        species:"",
        image:"",
        episode:[]
    })
    Redirect('/home')
}

function handleChange(e){
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
    setErrors({
        ...error,
        [e.target.name] : e.target.value
    })
}

function handleSelect(e){
    setInput({
        episode: [...input, e.target.value]
    })
    
}

return(
    <div>
        <div>
            <Link to='/'>
            <button>
                Return
            </button>

            </Link>
        </div>
        <h1> Create tu personaje !</h1>
        <form onSubmit={e=> handleSubmit(e)}>

        <div>
        <div>
            <label>Name:</label>
            <input type='text'
                    value={input.name}
                    name='name'
                    onChange={(e)=> {handleChange(e)}}            
            >
            
            </input>
        </div>

        <div>
            <label>Origin:</label>
            <input type='text'
                    value={input.origin}
                    name='origin'
                    onChange={(e)=> {handleChange(e)}}            
            >
            
            </input>
        </div>
        <div>
            <label>Species:</label>
            <input type='text'
                    value={input.species}
                    name='species'
                    onChange={(e)=> {handleChange(e)}}            
            >
            
            </input>
        </div>
        <div>
            <label>Image:</label>
            <input type='text'
                    value={input.image}
                    name='image'
                    onChange={(e)=> {handleChange(e)}}            
            >
            
            </input>
        </div>

            <div>

            <select onChange={(e)=> handleSelect(e)}>

              {listEpisodes?.map(ep =>(
                 <option value={ep.name}>

                    {ep.name}
                 </option>   

              ))}  



            </select>
                <button type="submit"> Create character</button>
            </div>


        </div>

        </form>



    </div>
)

}