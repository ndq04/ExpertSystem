import {useContext} from 'react'
import {CarContext} from '../contexts/CarContext'
import Car from './Car'

function Cars() {
  const {cars} = useContext(CarContext)
  return (
    <ul className='cars'>
      {cars.map((car) => (
        <Car key={car.id} {...car} />
      ))}
    </ul>
  )
}

export default Cars
