import {useContext} from 'react'
import {CarContext} from '../contexts/CarContext'

function Detail() {
  const {car} = useContext(CarContext)

  const getColor = (color) => {
    switch (color) {
      case 'C_T':
        return 'Trắng'
      case 'C_De':
        return 'Đen'
      case 'C_X':
        return 'Xanh'
      default:
        return 'Đỏ'
    }
  }
  const getColorCss = (color) => {
    switch (color) {
      case 'C_T':
        return 'gray'
      case 'C_De':
        return '#000'
      case 'C_X':
        return '#326dee'
      default:
        return '#e41414'
    }
  }
  return (
    <div>
      <img src={car.image} alt={car.name} />
      <p>{car.name}</p>
      <p>{car.price}</p>
      <span
        className='car-color'
        style={{color: getColorCss(car.color)}}
      >
        {getColor(car.color)}
      </span>
    </div>
  )
}

export default Detail
