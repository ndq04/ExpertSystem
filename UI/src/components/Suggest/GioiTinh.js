import {useState} from 'react'

function GioiTinh({handleGT, navigation}) {
  const [gioiTinhID, setGioiTinhID] = useState('')

  const random = (data) => {
    return data[Math.floor(Math.random() * data.length)]
  }
  const gioitinh = {
    nam: ['C_T', 'C_De', 'C_Do'],
    nu: ['C_T', 'C_Do'],
  }
  const gioiTinh = [
    {id: 'G1', name: 'Nam', value: random(gioitinh.nam)},
    {id: 'G2', name: 'Nữ', value: random(gioitinh.nu)},
  ]
  const handleClick = ({id, value, name}) => {
    setGioiTinhID(id)
    handleGT({id, value, name})
  }
  const handleNext = () => {
    if (gioiTinhID) {
      navigation.next()
    } else alert('Vui lòng chọn giới tính !')
  }
  return (
    <div className='content content--gt'>
      <div className='form'>
        <h3 className='heading'>Giới tính của bạn ?</h3>
        <ul className='form-list'>
          {gioiTinh.map((item) => (
            <li
              key={item.id}
              className={
                item.id === gioiTinhID
                  ? 'form-item active'
                  : 'form-item'
              }
              onClick={() =>
                handleClick({
                  id: item.id,
                  value: item.value,
                  name: item.name,
                })
              }
            >
              {item.name}
            </li>
          ))}
        </ul>
        <div>
          <button className='btn' onClick={handleNext}>
            Tiếp theo
          </button>
          <button
            className='btn btn--back'
            onClick={() => navigation.previous()}
          >
            Quay lại
          </button>
        </div>
      </div>
    </div>
  )
}

export default GioiTinh
