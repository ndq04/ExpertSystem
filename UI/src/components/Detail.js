import {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {CarContext} from '../contexts/CarContext'

function Detail() {
  const {car} = useContext(CarContext)
  const {name, image, color, price} = car
  const history = useHistory()
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
      <button onClick={() => history.goBack()}>Back</button>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{price} VND</p>
      <span
        className='car-color'
        style={{color: getColorCss(color)}}
      >
        {getColor(color)}
      </span>
    </div>
  )
}

export default Detail
