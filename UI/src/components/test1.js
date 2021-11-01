import {useState} from 'react'

function Test() {
  const [gioiTinhID, setGioiTinhID] = useState('')
  const [color, setColor] = useState('')
  const [type, setType] = useState('')
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
  const handleClick = ({id, color, type}) => {
    setGioiTinhID(id)
    setColor(color)
    setType(type)
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
                })
              }
            >
              {item.name}
            </li>
          ))}
        </ul>
        <div>
          <button className='btn'>Tiếp theo</button>
          <h1>{gioiTinhID}</h1>
          <h1>{color}</h1>
          <h1>{type}</h1>
        </div>
      </div>
    </div>
  )
}

export default Test
