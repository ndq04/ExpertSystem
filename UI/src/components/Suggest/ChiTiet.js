import {useContext} from 'react'
import {CarContext} from '../../contexts/CarContext'

function ChiTiet({navigation}) {
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
  const getType = (value) => {
    switch (value) {
      case 'T_M':
        return 'Mini/Hatchback'
      case 'T_Se':
        return 'Sedan'
      default:
        return 'SUV'
    }
  }
  return (
    <div className='car-detail'>
      <div className='car-detail-container'>
        <button
          onClick={() => navigation.previous()}
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

export default ChiTiet
