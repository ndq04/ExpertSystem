import {useState} from 'react'

function NgheNghiep({handleNN, navigation}) {
  const [ngheNghiepID, setNgheNghiepID] = useState('')

  const random = (data) => {
    return data[Math.floor(Math.random() * data.length)]
  }
  const nghenghiep = {
    congNhan_vienChuc: ['P_1', 'P_2', 'P_3'],
    bacSi: ['P_2', 'P_3', 'P_4'],
    nhanVienVP: ['P_2', 'P_3', 'P_4', 'P_5'],
    doanhNhan: ['P_3', 'P_4', 'P_5'],
  }
  const ngheNghiep = [
    {
      id: 'N1',
      name: 'Công nhân/Viên chức',
      value: random(nghenghiep.congNhan_vienChuc),
    },
    {
      id: 'N2',
      name: 'Bác sĩ',
      value: random(nghenghiep.bacSi),
    },
    {
      id: 'N3',
      name: 'Nhân viên văn phòng',
      value: random(nghenghiep.nhanVienVP),
    },
    {
      id: 'N4',
      name: 'Doanh nhân',
      value: random(nghenghiep.doanhNhan),
    },
  ]
  const handleClick = ({id, value}) => {
    setNgheNghiepID(id)
    handleNN({id, value})
  }
  return (
    <div>
      <ul>
        {ngheNghiep.map((item) => (
          <li
            key={item.id}
            style={{
              color: item.id === ngheNghiepID && 'blue',
            }}
            onClick={() =>
              handleClick({id: item.id, value: item.value})
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

export default NgheNghiep
