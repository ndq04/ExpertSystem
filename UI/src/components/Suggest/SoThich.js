import {useState} from 'react'

function SoThich({handleST, navigation}) {
  const [soThichID, setSoThichID] = useState('')

  const random = (data) => {
    return data[Math.floor(Math.random() * data.length)]
  }
  const sothich = {
    thethao: ['T_M', 'T_Se'],
    dulich: ['T_M', 'T_Se', 'T_Su'],
    khampha: ['T_Se', 'T_Su'],
    congnghe: ['T_Se'],
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
  return (
    <div>
      <ul>
        {soThich.map((item) => (
          <li
            key={item.id}
            style={{
              color: item.id === soThichID && 'deeppink',
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

export default SoThich
