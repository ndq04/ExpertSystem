import {useContext} from 'react'
import {CarContext} from '../contexts/CarContext'
import {dataFilter} from './../data'
import '../css/Filter.css'

function Filter() {
  const {state, handleChange, handleSearch, handleALl} =
    useContext(CarContext)
  return (
    <div className='filter'>
      <div className='filter-control'>
        <p>Hãng sản xuất</p>
        <select
          name='company'
          value={state.company}
          onChange={handleChange}
        >
          {dataFilter.company.map((op, i) => (
            <option key={i} value={op.val}>
              {op.lab}
            </option>
          ))}
        </select>
      </div>

      <div className='filter-control'>
        <p>Dòng xe</p>
        <select
          name='type'
          value={state.type}
          onChange={handleChange}
        >
          {dataFilter.type.map((op, i) => (
            <option key={i} value={op.val}>
              {op.lab}
            </option>
          ))}
        </select>
      </div>

      <div className='filter-control'>
        <p>Giá xe</p>
        <select
          name='price'
          value={state.price}
          onChange={handleChange}
        >
          {dataFilter.price.map((op, i) => (
            <option key={i} value={op.val}>
              {op.lab}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleSearch}>Tìm kiếm</button>
      <button onClick={handleALl}>Tất cả</button>
    </div>
  )
}

export default Filter
