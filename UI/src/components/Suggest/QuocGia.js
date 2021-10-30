import {useState} from 'react'

function QuocGia({handleQG, navigation, handleSugest}) {
  const [quocGiaID, setQuocGiaID] = useState('')

  const random = (data) => {
    return data[Math.floor(Math.random() * data.length)]
  }
  const quocgia = {
    hanquoc: ['CO_K', 'CO_Hy'],
    nhat: ['CO_Ho', 'CO_T'],
    vietnam: ['CO_V'],
    duc: ['CO_M', 'CO_B'],
  }
  const quocGia = [
    {
      id: 'Q1',
      name: 'Hàn Quốc (KIA, HYUNDAI)',
      value: random(quocgia.hanquoc),
    },
    {
      id: 'Q2',
      name: 'Nhật Bản (HONDA, TOYOTA)',
      value: random(quocgia.nhat),
    },
    {
      id: 'Q3',
      name: 'Việt Nam (VINFAST)',
      value: random(quocgia.vietnam),
    },
    {
      id: 'Q4',
      name: 'Đức (MERCEDES, BMW)',
      value: random(quocgia.duc),
    },
  ]
  const handleClick = ({id, value}) => {
    setQuocGiaID(id)
    handleQG({id, value})
  }
  const handleReview = () => {
    navigation.next()
    handleSugest()
  }
  return (
    <div>
      <ul>
        {quocGia.map((item) => (
          <li
            key={item.id}
            style={{
              color: item.id === quocGiaID && 'brown',
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
      <button onClick={handleReview}>Xem kết quả</button>
    </div>
  )
}

export default QuocGia
