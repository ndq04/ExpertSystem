import Car from './Car'
import {useContext} from 'react'
import {CarContext} from '../contexts/CarContext'

function Search() {
  const {cars} = useContext(CarContext)

  return (
    <div>
      <ul className='cars'>
        {cars.map((car) => (
          <Car key={car.id} {...car} />
        ))}
      </ul>
    </div>
  )
}

export default Search
