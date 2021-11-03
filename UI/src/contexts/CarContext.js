import {createContext, useState, useEffect} from 'react'

export const CarContext = createContext()

const CarContextProvider = ({children}) => {
  const [cars, setCars] = useState(() => {
    const initialCars = JSON.parse(
      localStorage.getItem('cars')
    )
    return initialCars || []
  })

  const [car, setCar] = useState([])
  const handleALl = () => {
    fetch('http://127.0.0.1:2000/api/getAll')
      .then((res) => res.json())
      // .then((data) => console.log(data.cars))
      .then((data) => setCars(data.cars))
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    handleALl()
  }, [])
  const [state, setState] = useState(() => {
    const initialState = JSON.parse(
      localStorage.getItem('state')
    )
    return (
      initialState || {
        type: 'T_M',
        price: 'P_1',
      }
    )
  })
  useEffect(() => {
    localStorage.setItem('cars', JSON.stringify(cars))
  }, [cars])

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
  }, [state])

  const handleDetail = (id) => {
    fetch(`http://127.0.0.1:2000/api/getOne/${id}`)
      .then((res) => res.json())
      // .then((data) => console.log(data.car))
      .then((data) => setCar(data.car))
      .catch((err) => console.log(err))
  }
  const handleChange = (e) => {
    const {value, name} = e.target
    setState({
      ...state,
      [name]: value,
    })
  }
  const handleSearch = (value) => {
    const search = (val) => {
      switch (val) {
        case 'type':
          return {type: state.type}
        default:
          return {price: state.price}
      }
    }
    fetch(`http://127.0.0.1:2000/api/search-${value}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(search(value)),
    })
      .then((res) => res.json())
      // .then((data) => console.log(data.cars))
      .then((data) => setCars(data.cars))
      .catch((err) => console.log(err))
  }

  const data = {
    cars,
    car,
    state,
    handleDetail,
    handleSearch,
    handleChange,
    handleALl,
  }
  return (
    <CarContext.Provider value={data}>
      {children}
    </CarContext.Provider>
  )
}

export default CarContextProvider
