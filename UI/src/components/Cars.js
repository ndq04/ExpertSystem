import {useContext} from 'react'
import {CarContext} from '../contexts/CarContext'
import Car from './Car'
import '../css/Cars.css'
import Empty from './Empty'

function Cars() {
  const {cars} = useContext(CarContext)
  return cars.length ? (
    <div className='cars'>
      <ul className='cars-content'>
        {cars.map((car) => (
          <Car key={car.id} {...car} />
        ))}
      </ul>
    </div>
  ) : (
    <Empty />
  )
}

export default Cars
