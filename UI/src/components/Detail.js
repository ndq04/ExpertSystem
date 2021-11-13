import {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {CarContext} from '../contexts/CarContext'
import {getColor, getColorCss, getType} from './getMethods'

function Detail() {
  const {car} = useContext(CarContext)
  const history = useHistory()

  return (
    <div className='car-detail'>
      <div className='car-detail-container'>
        <button
          onClick={() => history.goBack()}
          className='btn btn--back'
          style={{marginBottom: '20px'}}
        >
          Trở lại
        </button>
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
                  <span style={{marginTop: '10px'}}>
                    {getType(item.type)}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Detail
