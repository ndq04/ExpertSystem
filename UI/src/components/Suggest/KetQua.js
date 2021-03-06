import './Result.css'
import {BsGenderMale, BsGenderFemale} from 'react-icons/bs'
import {MdOutlineWork} from 'react-icons/md'
import {BiBody} from 'react-icons/bi'
import {useContext} from 'react'
import {CarContext} from '../../contexts/CarContext'
import {
  getColor,
  getColorCss,
  getType,
  getGT,
  getNN,
  getST,
  getPrice,
} from '../getMethods'

function KetQua({
  name,
  setName,
  navigation,
  handleStep,
  ...values
}) {
  const {handleDetail} = useContext(CarContext)
  const {
    gioiTinhID,
    gioiTinh_T,
    gioiTinhDesc,
    soThichID,
    soThich_T,
    soThich_P,
    soThichDesc,
    ngheNghiepID,
    ngheNghiepValue,
    ngheNghiepDesc,
    sugestCars,
  } = values
  const handleBackHome = () => {
    setName('')
    handleStep(0)
    navigation.go(0)
  }
  const handleClick = (id) => {
    navigation.next()
    handleDetail(id)
  }

  return (
    <div className='result'>
      <div className='result-info'>
        <div className='info'>
          <h2>
            Xin chào <span>{name}</span>
          </h2>
          <h3>Thông tin của bạn </h3>
          <div className='info-body'>
            <div className='info-item'>
              <h4>Giới Tính </h4>
              <p>
                <span>
                  {gioiTinhID === 'G1' ? (
                    <BsGenderMale size='1.1rem' />
                  ) : (
                    <BsGenderFemale size='1.1rem' />
                  )}
                </span>
                <span
                  className={
                    gioiTinhID === 'G1' ? 'male' : 'female'
                  }
                >
                  {getGT(gioiTinhID)}
                </span>
              </p>
            </div>
            <div className='info-item'>
              <h4>Sở Thích</h4>
              <p>
                <span>
                  <BiBody size='1.3rem' />
                </span>
                <span
                  className={
                    gioiTinhID === 'G1' ? 'male' : 'female'
                  }
                >
                  {getST(soThichID)}
                </span>
              </p>
            </div>
            <div className='info-item'>
              <h4>Nghề Nghiệp </h4>
              <p>
                <span>
                  <MdOutlineWork size='1.1rem' />
                </span>
                <span
                  className={
                    gioiTinhID === 'G1' ? 'male' : 'female'
                  }
                >
                  {getNN(ngheNghiepID)}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className='detail'>
          <div>
            <p>
              - Giới Tính : <span>{getGT(gioiTinhID)}</span>
            </p>
            <p>{gioiTinhDesc.desc1}</p>
            <p>
              {gioiTinhDesc.desc2} {getType(gioiTinh_T)}
            </p>
          </div>
          <br />
          <div>
            <p>
              - Sở Thích : <span>{getST(soThichID)}</span>
            </p>
            <p>
              {soThichDesc.desc1} {getType(soThich_T)}
            </p>
            <p>
              {soThichDesc.desc2} {getPrice(soThich_P)}
            </p>
          </div>
          <br />
          <div>
            <p>
              - Nghề Nghiệp :{' '}
              <span>{getNN(ngheNghiepID)}</span>
            </p>
            <p>
              {ngheNghiepDesc}
              {getPrice(ngheNghiepValue)}
            </p>
          </div>
        </div>
        <button
          className='btn btn--back'
          onClick={handleBackHome}
        >
          Về trang đầu
        </button>
      </div>
      {sugestCars.length > 0 ? (
        <div className='result-view'>
          <ul>
            {sugestCars.map((car) => (
              <li
                key={car.id}
                onClick={() => handleClick(car.id)}
                style={{cursor: 'pointer'}}
              >
                <img src={car.image} alt={car.name} />
                <h3>{car.name}</h3>
                <p>
                  {car.price.toLocaleString('vi-VN')} VND
                </p>
                <div>
                  <span
                    className='car-color'
                    style={{
                      color: getColorCss(car.color),
                    }}
                  >
                    {getColor(car.color)}
                  </span>
                  <span style={{marginLeft: '10px'}}>
                    {getType(car.type)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className='result-view result-view--empty'>
          <h3 className='title-nf'>
            Rất tiếc! Không có sản phẩm phù hợp trong cửa
            hàng
          </h3>
        </div>
      )}
    </div>
  )
}

export default KetQua
