import './Result.css'

function KetQua({name, setName, navigation, ...values}) {
  const {
    gioiTinhID,
    gioiTinh_C,
    gioiTinh_T,
    soThichID,
    soThich_T,
    soThich_P,
    ngheNghiepID,
    ngheNghiepValue,
    sugestCars,
  } = values
  const handleBackHome = () => {
    setName('')
    navigation.go(0)
  }
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
  const getGT = (value) => {
    switch (value) {
      case 'G1':
        return 'Nam'
      default:
        return 'Nữ'
    }
  }
  const getNN = (value) => {
    switch (value) {
      case 'N1':
        return 'Công nhân'
      case 'N2':
        return 'Giáo viên'
      case 'N3':
        return 'Bác sĩ'
      case 'N4':
        return 'Nhân viên văn phòng'
      default:
        return 'Doanh nhân'
    }
  }
  const getST = (value) => {
    switch (value) {
      case 'S1':
        return 'Du lịch'
      case 'S2':
        return 'Thể thao'
      default:
        return 'Khám phá, phiêu lưu'
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
  const getPrice = (value) => {
    switch (value) {
      case 'P_1':
        return 'Từ 300 triệu đến 500 triệu'
      case 'P_2':
        return 'Từ 500 triệu đến 800 triệu'
      case 'P_3':
        return 'Từ 800 triệu đến 1,5 tỷ'
      case 'P_4':
        return 'Từ 1,5 tỷ đến 2,5 tỷ'
      case 'P_5':
        return 'Từ 2,5 tỷ đến 3,5 tỷ'
      default:
        return 'Từ 3,5 tỷ đến trên 4 tỷ'
    }
  }
  return (
    <div className='result'>
      <div className='result-info'>
        <h2>
          Xin chào <span>{name}</span>
        </h2>
        <h3>
          Số lượng sản phẩm phù hợp {sugestCars.length}
        </h3>
        <h3>Thông tin </h3>
        <h3>
          {getGT(gioiTinhID)} {getColor(gioiTinh_C)}{' '}
          {getType(gioiTinh_T)}
        </h3>
        <h3>
          {getST(soThichID)} {getType(soThich_T)}{' '}
          {getPrice(soThich_P)}
        </h3>
        <h3>
          {getNN(ngheNghiepID)} {getPrice(ngheNghiepValue)}
        </h3>
        <button onClick={handleBackHome}>Trở lại</button>
      </div>
      <div className='result-view'>
        {sugestCars.length > 0 ? (
          <ul>
            {sugestCars.map((car) => (
              <li key={car.id}>
                <img src={car.image} alt={car.name} />
                <h3>{car.name}</h3>
                <p>
                  {car.price.toLocaleString('vi-VN')} VND
                </p>
                <div>
                  <span
                    className='car-color'
                    style={{color: getColorCss(car.color)}}
                  >
                    {getColor(car.color)}
                  </span>
                  <span>{getType(car.type)}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <h3>
              Rất tiếc! Không có sản phẩm phù hợp trong cửa
              hàng
            </h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default KetQua
