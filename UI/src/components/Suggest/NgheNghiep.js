import {useState} from 'react'

function NgheNghiep({handleNN, navigation}) {
  const [ngheNghiepID, setNgheNghiepID] = useState('')

  const random = (data) => {
    return data[Math.floor(Math.random() * data.length)]
  }
  const nghenghiep = {
    congNhan: ['P_1', 'P_2'],
    giaoVien: ['P_1', 'P_2', 'P_3'],
    bacSi: ['P_2', 'P_3'],
    nhanVienVP: ['P_2', 'P_3', 'P_4'],
    doanhNhan: ['P_3', 'P_4', 'P_5', 'P_6'],
  }
  const ngheNghiep = [
    {
      id: 'N1',
      name: 'Công nhân',
      value: random(nghenghiep.congNhan),
    },
    {
      id: 'N2',
      name: 'Giáo viên',
      value: random(nghenghiep.giaoVien),
    },
    {
      id: 'N3',
      name: 'Bác sĩ',
      value: random(nghenghiep.bacSi),
    },
    {
      id: 'N4',
      name: 'Nhân viên văn phòng',
      value: random(nghenghiep.nhanVienVP),
    },
    {
      id: 'N5',
      name: 'Doanh nhân',
      value: random(nghenghiep.doanhNhan),
    },
  ]
  const handleClick = ({id, value}) => {
    setNgheNghiepID(id)
    handleNN({id, value})
  }
  const handleNext = () => {
    if (ngheNghiepID) {
      navigation.next()
    } else alert('Vui lòng chọn nghề nghiệp của bạn !')
  }
  return (
    <div className='content content--nn'>
      <div className='form form--lg'>
        <h3 className='heading'>
          Nghề nghiệp hiện tại của bạn ?
        </h3>
        <ul className='form-list'>
          {ngheNghiep.map((item) => (
            <li
              key={item.id}
              className={
                item.id === ngheNghiepID
                  ? 'form-item active'
                  : 'form-item'
              }
              onClick={() =>
                handleClick({
                  id: item.id,
                  value: item.value,
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

export default NgheNghiep
