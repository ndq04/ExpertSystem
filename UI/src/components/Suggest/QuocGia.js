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
      name: 'Hàn Quốc',
      value: random(quocgia.hanquoc),
    },
    {
      id: 'Q2',
      name: 'Nhật Bản',
      value: random(quocgia.nhat),
    },
    {
      id: 'Q3',
      name: 'Việt Nam',
      value: random(quocgia.vietnam),
    },
    {
      id: 'Q4',
      name: 'Đức',
      value: random(quocgia.duc),
    },
  ]
  const handleClick = ({id, value}) => {
    setQuocGiaID(id)
    handleQG({id, value})
  }
  const handleReview = () => {
    if (quocGiaID) {
      navigation.next()
      handleSugest()
    } else alert('Vui lòng chọn 1 trong 4 quốc gia !')
  }

  return (
    <div className='content content--qg'>
      <div className='form'>
        <h3 className='heading'>
          Quốc gia sản xuất mà bạn quan tâm ?
        </h3>
        <ul className='form-list'>
          {quocGia.map((item) => (
            <li
              key={item.id}
              className={
                item.id === quocGiaID
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
          <button className='btn' onClick={handleReview}>
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

export default QuocGia
