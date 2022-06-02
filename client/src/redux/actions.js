import axios from'axios'

export function runCharacters(){
    return function (dispatch){
        axios.get('/character')
        .then(datos =>{
            return dispatch({
                type: 'LOAD_CHARACTERS',
                payload: datos.data
            })
        })
        .catch(error => {
            console.log(error)
        }
    )}
    
}

export function runEpisode(){
    return function (dispatch){
        axios.get('/Episode')
        .then(datos =>{
            return dispatch({
                type: 'LOAD_EPISODE',
                payload: datos.data
            })
        })
        .catch(error => {
            console.log(error)
        }
    )}
    
}

export function newChar(){
    return function(dispatch){
        axios.post('/character')
        .then(data =>{
            return dispatch({
                type:"NEW_CHARACTER",
                payload: data.data
            })
        })
    }
}



