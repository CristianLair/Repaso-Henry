import {Route} from'react-router-dom'
import Home from './home/home'
import {CreateCharacter} from './home/CreateCharacter'
function App() {
  return (
    <>
    <Route path={'/'}  >
      <Home />
      
    </Route>

    <Route path={'/createCharacter'} >

      <CreateCharacter />
    </Route>
    </>
  )
}

export default App;
