function KetQua({name, navigation, ...values}) {
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
  return (
    <div>
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
      <h3>Xin chào {name}</h3>
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
          <h4>Không có sản phẩm phù hợp</h4>
        </div>
      )}

      <button onClick={() => navigation.previous()}>
        Trở lại
      </button>
    </div>
  )
}

export default KetQua
