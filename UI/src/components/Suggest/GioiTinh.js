import {useState} from 'react'

function GioiTinh({handleGT, navigation}) {
  const [gioiTinhID, setGioiTinhID] = useState('')

  const random = (data) => {
    return data[Math.floor(Math.random() * data.length)]
  }
  const gioitinh = {
    nam: {
      C: ['C_T', 'C_De', 'C_Do'],
      T: ['T_Se', 'T_Su'],
    },
    nu: {
      C: ['C_T', 'C_De', 'C_Do'],
      T: ['T_M', 'T_Se'],
    },
  }
  const gioiTinh = [
    {
      id: 'G1',
      name: 'Nam',
      color: random(gioitinh.nam.C),
      type: random(gioitinh.nam.T),
    },
    {
      id: 'G2',
      name: 'Nữ',
      color: random(gioitinh.nu.C),
      type: random(gioitinh.nu.T),
    },
  ]
  const handleClick = ({id, color, type, name}) => {
    setGioiTinhID(id)
    handleGT({id, color, type, name})
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
                  color: item.color,
                  type: item.type,
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
