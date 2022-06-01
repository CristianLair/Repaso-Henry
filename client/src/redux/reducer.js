export const initialState = {
chars:[],
episode:[]
};

export default function rootReducer(state = initialState,action) {
  switch (action.type) {
      case "LOAD_CHARACTERS":{
          return {
              ...state,
              chars: action.payload
          }
      }
      case "LOAD_EPISODE":{
        return {
            ...state,
            episode: action.payload
        }
    }
          
  
      default:{
          return state
      }
          
         
  }




}

