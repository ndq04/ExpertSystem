import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {CarContext} from '../contexts/CarContext'

function Car({id, name, image, price, color}) {
  const {handleDetail} = useContext(CarContext)

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
    <li onClick={() => handleDetail(id)} className='car'>
      <Link to='/chitiet' className='car-container'>
        <div className='car-img'>
          <img src={image} alt={name} />
        </div>
        <div className='desc'>
          <h3>{name}</h3>
          <p>{price.toLocaleString('vi-VN')} VND</p>
          <span
            className='car-color'
            style={{color: getColorCss(color)}}
          >
            {getColor(color)}
          </span>
        </div>
      </Link>
    </li>
  )
}

export default Car
