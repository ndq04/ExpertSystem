import {useContext} from 'react'
import {CarContext} from '../contexts/CarContext'
import {dataFilter} from './../data'
import '../css/Filter.css'
import {BsSearch} from 'react-icons/bs'

function Filter() {
  const {state, handleChange, handleSearch, handleALl} =
    useContext(CarContext)
  return (
    <div className='filter'>
      <div className='filter-control'>
        <p>Dòng xe</p>
        <div className='filter-item'>
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
          <button
            className='btn'
            onClick={() => handleSearch('type')}
          >
            <BsSearch />
          </button>
        </div>
      </div>

      <div className='filter-control'>
        <p>Giá xe</p>
        <div className='filter-item'>
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
          <button
            className='btn'
            onClick={() => handleSearch('price')}
          >
            <BsSearch />
          </button>
        </div>
      </div>

      <button className='btn btn--all' onClick={handleALl}>
        Xem tất cả
      </button>
    </div>
  )
}

export default Filter
