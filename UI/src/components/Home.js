import Cars from './Cars'
import Filter from './Filter'
import '../css/Home.css'

function Home() {
  return (
    <div className='container'>
      <Filter />
      <Cars />
    </div>
  )
}

export default Home
