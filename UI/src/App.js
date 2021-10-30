import {Route, Switch} from 'react-router-dom'
import Error from './components/Error'
import Header from './components/Header'
import Detail from './components/Detail'
import Home from './components/Home'
import Suggest from './components/Suggest'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/chitiet' component={Detail} />
        <Route exact path='/tuvan' component={Suggest} />
        <Route path='/*' component={Error} />
      </Switch>
    </div>
  )
}

export default App
