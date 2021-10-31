function KetQua({name, setName, navigation, ...values}) {
  const {
    gioiTinh,
    gioiTinhID,
    gioiTinhValue,
    ngheNghiepID,
    ngheNghiepValue,
    soThichID,
    soThichValue,
    quocGiaID,
    quocGiaValue,
    sugestCar,
  } = values
  const handleBackHome = () => {
    setName('')
    navigation.go(0)
  }
  return (
    <div>
      <h3 className='heading heading--name'>
        Xin chào <span>{name}</span>
      </h3>
      <h3>
        {gioiTinhID} - {gioiTinh} {gioiTinhValue}
      </h3>
      <h3>
        {ngheNghiepID} {ngheNghiepValue}
      </h3>
      <h3>
        {soThichID} {soThichValue}
      </h3>
      <h3>
        {quocGiaID} {quocGiaValue}
      </h3>
      {typeof sugestCar === 'object' && (
        <div>
          <img src={sugestCar.image} alt={sugestCar.name} />
          <p>{sugestCar.name}</p>
          <p>
            {sugestCar.price.toLocaleString('vi-VN')} VND
          </p>
        </div>
      )}
      {typeof sugestCar === 'string' && (
        <div>
          <h4>
            Rất tiếc! Không có sản phẩm phù hợp trong cửa
            hàng!
          </h4>
        </div>
      )}

      <button onClick={handleBackHome}>Trở lại</button>
    </div>
  )
}

export default KetQua
