import {Route, Switch} from 'react-router-dom'
import Cars from './components/Cars'
import Error from './components/Error'
import Header from './components/Header'
import Search from './components/Search'
import Suggest from './components/Suggest'
import Detail from './components/Detail'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Cars} />
        <Route exact path='/chitiet' component={Detail} />
        <Route exact path='/timkiem' component={Search} />
        <Route exact path='/tuvan' component={Suggest} />
        <Route path='/*' component={Error} />
      </Switch>
    </div>
  )
}

export default App
