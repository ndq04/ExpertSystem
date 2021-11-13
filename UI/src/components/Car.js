import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {CarContext} from '../contexts/CarContext'
import {getColor, getColorCss, getType} from './getMethods'

function Car({id, name, image, price, color, type}) {
  const {handleDetail} = useContext(CarContext)

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
          <span style={{marginTop: '10px'}}>
            {getType(type)}
          </span>
        </div>
      </Link>
    </li>
  )
}

export default Car
