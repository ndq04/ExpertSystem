import {useState} from 'react'

function SoThich({handleST, navigation, handleSugest}) {
  const [soThichID, setSoThichID] = useState('')

  const random = (data) => {
    return data[Math.floor(Math.random() * data.length)]
  }
  const sothich = {
    S1: {
      T: ['T_M', 'T_Se', 'T_Su'],
      P: ['P_1', 'P_2', 'P_3'],
    },
    S2: {
      T: ['T_Se', 'T_Su'],
      P: ['P_2', 'P_3', 'P_4'],
    },
    S3: {
      T: ['T_Se', 'T_Su'],
      P: ['P_2', 'P_3', 'P_4'],
    },
  }
  const soThich = [
    {
      id: 'S1',
      name: 'Du lịch',
      type: random(sothich.S1.T),
      price: random(sothich.S1.P),
      desc: {
        desc1: '+ Dòng xe có thể tham khảo: ',
        desc2: '+ Giá tiền tương ứng thể tham khảo: ',
      },
    },
    {
      id: 'S2',
      name: 'Thể thao',
      type: random(sothich.S2.T),
      price: random(sothich.S2.P),
      desc: {
        desc1: '+ Dòng xe có thể tham khảo: ',
        desc2: '+ Giá tiền tương ứng thể tham khảo: ',
      },
    },
    {
      id: 'S3',
      name: 'Khám phá, phiêu lưu',
      type: random(sothich.S3.T),
      price: random(sothich.S3.P),
      desc: {
        desc1: '+ Dòng xe có thể tham khảo: ',
        desc2: '+ Giá tiền tương ứng thể tham khảo: ',
      },
    },
  ]
  const handleClick = ({id, type, price, desc}) => {
    setSoThichID(id)
    handleST({id, type, price, desc})
  }
  const handleNext = () => {
    if (soThichID) {
      navigation.next()
      handleSugest()
    } else alert('Vui lòng chọn sở thích của bạn !')
  }
  return (
    <div className='content content--st'>
      <div className='form'>
        <h3 className='heading'>
          Sở thích của bạn là gì ?
        </h3>
        <ul className='form-list'>
          {soThich.map((item) => (
            <li
              key={item.id}
              className={
                item.id === soThichID
                  ? 'form-item active'
                  : 'form-item'
              }
              onClick={() =>
                handleClick({
                  id: item.id,
                  type: item.type,
                  price: item.price,
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
            Xem kết quả
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

export default SoThich
