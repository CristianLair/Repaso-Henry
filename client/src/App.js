import {Route} from'react-router-dom'
import Home from './home/home'

function App() {
  return (
    <>
    <Route path={'/'}  >
      <Home />
    
    </Route>
    </>
  )
}

export default App;
