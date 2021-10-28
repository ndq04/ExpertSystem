import {useState, useEffect} from 'react'
import Car from './Car'
function Search() {
  const [cars, setCars] = useState(() => {
    const initialCars = JSON.parse(
      localStorage.getItem('search-cars')
    )
    return initialCars || []
  })
  const [state, setState] = useState(() => {
    const initialState = JSON.parse(
      localStorage.getItem('state')
    )
    return (
      initialState || {
        company: 'CO_B',
        type: 'T_M',
        price: 'P_1',
      }
    )
  })
  const data = {
    company: [
      {val: 'CO_B', lab: 'BMW'},
      {val: 'CO_Ho', lab: 'Honda'},
      {val: 'CO_Hy', lab: 'Hyundai'},
      {val: 'CO_K', lab: 'Kia'},
      {val: 'CO_M', lab: 'Mercedes'},
      {val: 'CO_T', lab: 'Toyata'},
      {val: 'CO_V', lab: 'Vinfast'},
    ],
    type: [
      {val: 'T_M', lab: 'Mini/Hatchback'},
      {val: 'T_Se', lab: 'Sedan'},
      {val: 'T_Su', lab: 'SUV'},
      {val: 'T_P', lab: 'Pickup'},
    ],
    price: [
      {val: 'P_1', lab: 'Từ 300 triệu đến 800 triệu'},
      {val: 'P_2', lab: 'Từ 1 tỷ đến 2 tỷ'},
      {val: 'P_3', lab: 'Từ 2 tỷ đến 4 tỷ'},
      {val: 'P_4', lab: 'Trên 4 tỷ'},
    ],
  }
  const handleChange = (e) => {
    const {value, name} = e.target
    console.log(value, name)
    setState({
      ...state,
      [name]: value,
    })
  }
  const handleSearch = () => {
    fetch('http://127.0.0.1:2000/api/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        company: state.company,
        color: state.color,
        type: state.type,
        price: state.price,
      }),
    })
      .then((res) => res.json())
      // .then((data) => console.log(data.cars))
      .then((data) => setCars(data.cars))
      .catch((err) => console.log(err))
  }
  const handleRemove = () => {
    setCars([])
    console.log('OK')
  }

  useEffect(() => {
    localStorage.setItem(
      'search-cars',
      JSON.stringify(cars)
    )
  }, [cars])

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
  }, [state])

  return (
    <div>
      <label>
        <p>Hãng sản xuất</p>
        <select
          name='company'
          value={state.company}
          onChange={handleChange}
        >
          {data.company.map((op, i) => (
            <option key={i} value={op.val}>
              {op.lab}
            </option>
          ))}
        </select>
      </label>

      <label>
        <p>Dòng xe</p>
        <select
          name='type'
          value={state.type}
          onChange={handleChange}
        >
          {data.type.map((op, i) => (
            <option key={i} value={op.val}>
              {op.lab}
            </option>
          ))}
        </select>
      </label>

      <label>
        <p>Giá xe</p>
        <select
          name='price'
          value={state.price}
          onChange={handleChange}
        >
          {data.price.map((op, i) => (
            <option key={i} value={op.val}>
              {op.lab}
            </option>
          ))}
        </select>
      </label>

      <button onClick={handleSearch}>Tìm kiếm</button>

      <button onClick={handleRemove}>
        Xóa lịch sử tìm kiếm
      </button>

      <ul className='cars'>
        {cars.map((car) => (
          <Car key={car.id} {...car} />
        ))}
      </ul>
      {console.log(state)}
    </div>
  )
}

export default Search
