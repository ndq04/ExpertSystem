import {createContext, useState, useEffect} from 'react'

export const CarContext = createContext()

const CarContextProvider = ({children}) => {
  const [cars, setCars] = useState(() => {
    const initialCars = JSON.parse(
      localStorage.getItem('cars')
    )
    return initialCars || []
  })
  const [car, setCar] = useState({})
  useEffect(() => {
    fetch('http://127.0.0.1:2000/api/getAll')
      .then((res) => res.json())
      .then((data) => setCars(data.cars))
      .catch((err) => console.log(err))
  }, [])
  useEffect(() => {
    localStorage.setItem('cars', JSON.stringify(cars))
  }, [cars])

  const handleDetail = (id) => {
    fetch(`http://127.0.0.1:2000/api/getOne/${id}`)
      .then((res) => res.json())
      .then((data) => setCar(data.car))
      .catch((err) => console.log(err))
  }

  const data = {
    cars,
    car,
    handleDetail,
  }
  return (
    <CarContext.Provider value={data}>
      {children}
    </CarContext.Provider>
  )
}

export default CarContextProvider
