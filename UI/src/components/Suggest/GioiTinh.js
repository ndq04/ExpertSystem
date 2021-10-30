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
  return (
    <div>
      <ul>
        {gioiTinh.map((item) => (
          <li
            key={item.id}
            style={{color: item.id === gioiTinhID && 'red'}}
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
      <button onClick={() => navigation.previous()}>
        Quay lại
      </button>
      <button onClick={() => navigation.next()}>
        Tiếp theo
      </button>
    </div>
  )
}

export default GioiTinh
