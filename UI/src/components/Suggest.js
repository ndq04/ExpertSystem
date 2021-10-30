import {useState} from 'react'
import {useStep} from 'react-hooks-helper'
import GioiTinh from './Suggest/GioiTinh'
import NgheNghiep from './Suggest/NgheNghiep'
import QuocGia from './Suggest/QuocGia'
import SoThich from './Suggest/SoThich'
import TrangChu from './Suggest/TrangChu'
import KetQua from './Suggest/KetQua'
import Error from './Error'

function Suggest() {
  const [gioiTinh, setGioiTinh] = useState('')
  const [gioiTinhID, setGioiTinhID] = useState('')
  const [gioiTinhValue, setGioiTinhValue] = useState('')
  const [ngheNghiepID, setNgheNghiepID] = useState('')
  const [ngheNghiepValue, setNgheNghiepValue] = useState('')
  const [soThichID, setSoThichID] = useState('')
  const [soThichValue, setSoThichValue] = useState('')
  const [quocGiaID, setQuocGiaID] = useState('')
  const [quocGiaValue, setQuocGiaValue] = useState('')

  const [sugestCar, setSugestCar] = useState()

  const handleGT = ({id, value, name}) => {
    setGioiTinh(name)
    setGioiTinhID(id)
    setGioiTinhValue(value)
  }
  const handleNN = ({id, value}) => {
    setNgheNghiepID(id)
    setNgheNghiepValue(value)
  }
  const handleST = ({id, value}) => {
    setSoThichID(id)
    setSoThichValue(value)
  }
  const handleQG = ({id, value}) => {
    setQuocGiaID(id)
    setQuocGiaValue(value)
  }
  const handleSugest = () => {
    fetch('http://127.0.0.1:2000/api/tuvan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        gioitinh: gioiTinhValue,
        nghenghiep: ngheNghiepValue,
        sothich: soThichValue,
        quocgia: quocGiaValue,
      }),
    })
      .then((res) => res.json())
      // .then((data) => console.log(data.car))
      .then((data) => setSugestCar(data.car))
      .catch((err) => console.log(err))
  }
  const steps = [
    {id: 'tc'},
    {id: 'gt'},
    {id: 'nn'},
    {id: 'st'},
    {id: 'qg'},
    {id: 'kq'},
  ]

  const [name, setName] = useState('')
  const {step, navigation} = useStep({
    steps,
    initialStep: 0,
  })

  const props = {name, setName, navigation}
  const values = {
    gioiTinh,
    gioiTinhID,
    gioiTinhValue,
    ngheNghiepID,
    ngheNghiepValue,
    soThichID,
    soThichValue,
    quocGiaID,
    quocGiaValue,
    sugestCar,
  }

  switch (step.id) {
    case 'tc':
      return <TrangChu {...props} />
    case 'gt':
      return <GioiTinh handleGT={handleGT} {...props} />
    case 'nn':
      return <NgheNghiep handleNN={handleNN} {...props} />
    case 'st':
      return <SoThich handleST={handleST} {...props} />
    case 'qg':
      return (
        <QuocGia
          handleQG={handleQG}
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
