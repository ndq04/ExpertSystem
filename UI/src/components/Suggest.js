import {useState} from 'react'
import {useStep} from 'react-hooks-helper'
import GioiTinh from './Suggest/GioiTinh'
import NgheNghiep from './Suggest/NgheNghiep'
import SoThich from './Suggest/SoThich'
import TrangChu from './Suggest/TrangChu'
import KetQua from './Suggest/KetQua'
import Error from './Error'

function Suggest() {
  const [gioiTinhID, setGioiTinhID] = useState('')
  const [gioiTinh_C, setGioiTinh_C] = useState('')
  const [gioiTinh_T, setGioiTinh_T] = useState('')
  const [soThichID, setSoThichID] = useState('')
  const [soThich_T, setSoThich_T] = useState('')
  const [soThich_P, setSoThich_P] = useState('')
  const [ngheNghiepID, setNgheNghiepID] = useState('')
  const [ngheNghiepValue, setNgheNghiepValue] = useState('')

  const [sugestCars, setSugestCars] = useState([])

  const handleGT = ({id, color, type, name}) => {
    setGioiTinhID(id)
    setGioiTinh_C(color)
    setGioiTinh_T(type)
  }
  const handleNN = ({id, value}) => {
    setNgheNghiepID(id)
    setNgheNghiepValue(value)
  }
  const handleST = ({id, type, price}) => {
    setSoThichID(id)
    setSoThich_T(type)
    setSoThich_P(price)
  }
  const handleSugest = () => {
    fetch('http://127.0.0.1:2000/api/tuvan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        gioitinh_color: gioiTinh_C,
        gioitinh_type: gioiTinh_T,
        sothich_type: soThich_T,
        sothich_price: soThich_P,
        nghenghiep: ngheNghiepValue,
      }),
    })
      .then((res) => res.json())
      // .then((data) => console.log(data.cars))
      .then((data) => setSugestCars(data.cars))
      .catch((err) => console.log(err))
  }
  const steps = [
    {id: 'tc'},
    {id: 'gt'},
    {id: 'nn'},
    {id: 'st'},
    {id: 'kq'},
  ]

  const [name, setName] = useState('')
  const {step, navigation} = useStep({
    steps,
    initialStep: 1,
  })

  const props = {name, setName, navigation}
  const values = {
    gioiTinhID,
    gioiTinh_C,
    gioiTinh_T,
    soThichID,
    soThich_T,
    soThich_P,
    ngheNghiepID,
    ngheNghiepValue,
    sugestCars,
  }

  switch (step.id) {
    case 'tc':
      return <TrangChu {...props} />
    case 'gt':
      return <GioiTinh handleGT={handleGT} {...props} />
    case 'nn':
      return <NgheNghiep handleNN={handleNN} {...props} />
    case 'st':
      return (
        <SoThich
          handleST={handleST}
          {...props}
          handleSugest={handleSugest}
        />
      )
    case 'kq':
      return <KetQua {...values} {...props} />
    default:
      return <Error />
  }
}

export default Suggest
