import {useState} from 'react'

function SoThich({handleST, navigation}) {
  const [soThichID, setSoThichID] = useState('')

  const random = (data) => {
    return data[Math.floor(Math.random() * data.length)]
  }
  const sothich = {
    thethao: ['T_M', 'T_Se'],
    dulich: ['T_M', 'T_Se', 'T_Su'],
    khampha: ['T_M', 'T_Se', 'T_Su'],
    congnghe: ['T_M', 'T_Se', 'T_Su'],
  }
  const soThich = [
    {
      id: 'S1',
      name: 'Thể thao',
      value: random(sothich.thethao),
    },
    {
      id: 'S2',
      name: 'Du lịch',
      value: random(sothich.dulich),
    },
    {
      id: 'S3',
      name: 'Khám phá, phiêu lưu',
      value: random(sothich.khampha),
    },
    {
      id: 'S4',
      name: 'Công nghệ',
      value: random(sothich.congnghe),
    },
  ]
  const handleClick = ({id, value}) => {
    setSoThichID(id)
    handleST({id, value})
  }
  const handleNext = () => {
    if (soThichID) {
      navigation.next()
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

export default SoThich
