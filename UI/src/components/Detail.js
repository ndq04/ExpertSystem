import {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {CarContext} from '../contexts/CarContext'

function Detail() {
  const {car} = useContext(CarContext)
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
      <ul>
        {car.map((item, i) => (
          <li key={i} className='car'>
            <div className='car-container'>
              <div className='car-img'>
                <img src={item.image} alt={item.name} />
              </div>
              <div className='desc'>
                <h3>{item.name}</h3>
                <p>
                  {item.price.toLocaleString('vi-VN')} VND
                </p>
                <span
                  className='car-color'
                  style={{color: getColorCss(item.color)}}
                >
                  {getColor(item.color)}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Detail
