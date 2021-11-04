import {useState} from 'react'
import StepComponent from './StepComponent'

function NgheNghiep({
  handleNN,
  navigation,
  initStep,
  handleStep,
}) {
  const [ngheNghiepID, setNgheNghiepID] = useState('')

  const random = (data) => {
    return data[Math.floor(Math.random() * data.length)]
  }
  const nghenghiep = {
    congNhan: ['P_1', 'P_2'],
    giaoVien: ['P_1', 'P_2', 'P_3'],
    bacSi: ['P_2', 'P_3', 'P_4'],
    nhanVienVP: ['P_2', 'P_3', 'P_4', 'P_5'],
    doanhNhan: ['P_3', 'P_4', 'P_5', 'P_6'],
  }

  const ngheNghiep = [
    {
      id: 'N1',
      name: 'Công nhân',
      value: random(nghenghiep.congNhan),
      desc: '+ Giá tiền phù hợp nên lựa chọn: ',
    },
    {
      id: 'N2',
      name: 'Giáo viên',
      value: random(nghenghiep.giaoVien),
      desc: '+ Giá tiền phù hợp nên lựa chọn: ',
    },
    {
      id: 'N3',
      name: 'Bác sĩ',
      value: random(nghenghiep.bacSi),
      desc: '+ Giá tiền phù hợp nên lựa chọn: ',
    },
    {
      id: 'N4',
      name: 'Nhân viên văn phòng',
      value: random(nghenghiep.nhanVienVP),
      desc: '+ Giá tiền phù hợp nên lựa chọn: ',
    },
    {
      id: 'N5',
      name: 'Doanh nhân',
      value: random(nghenghiep.doanhNhan),
      desc: '+ Giá tiền phù hợp nên lựa chọn: ',
    },
  ]
  const handleClick = ({id, value, desc}) => {
    setNgheNghiepID(id)
    handleNN({id, value, desc})
  }
  const handleNext = () => {
    if (ngheNghiepID) {
      handleStep(initStep + 1)
      navigation.next()
    } else alert('Vui lòng chọn nghề nghiệp của bạn !')
  }
  const handlePrev = () => {
    navigation.previous()
    handleStep(initStep - 1)
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
                  desc: item.desc,
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
            onClick={handlePrev}
          >
            Quay lại
          </button>
        </div>
      </div>
      <StepComponent initStep={initStep} />
    </div>
  )
}

export default NgheNghiep
