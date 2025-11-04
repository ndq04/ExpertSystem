import {useState} from 'react';
import {useStep} from 'react-hooks-helper';
import GioiTinh from './Suggest/GioiTinh';
import NgheNghiep from './Suggest/NgheNghiep';
import SoThich from './Suggest/SoThich';
import TrangChu from './Suggest/TrangChu';
import KetQua from './Suggest/KetQua';
import Error from './Error';
import ChiTiet from './Suggest/ChiTiet';

function Suggest() {
  const [gioiTinhID, setGioiTinhID] = useState('');
  const [gioiTinh_C, setGioiTinh_C] = useState('');
  const [gioiTinh_T, setGioiTinh_T] = useState('');
  const [gioiTinhDesc, setGioiTinhDesc] = useState('');

  const [soThichID, setSoThichID] = useState('');
  const [soThich_T, setSoThich_T] = useState('');
  const [soThich_P, setSoThich_P] = useState('');
  const [soThichDesc, setSoThichDesc] = useState('');

  const [ngheNghiepID, setNgheNghiepID] = useState('');
  const [ngheNghiepValue, setNgheNghiepValue] = useState('');
  const [ngheNghiepDesc, setNgheNghiepDesc] = useState('');

  const [sugestCars, setSugestCars] = useState([]);
  const [initStep, setInitStep] = useState(0);

  const handleGT = ({id, color, type, desc}) => {
    setGioiTinhID(id);
    setGioiTinh_C(color);
    setGioiTinh_T(type);
    setGioiTinhDesc(desc);
  };
  const handleNN = ({id, value, desc}) => {
    setNgheNghiepID(id);
    setNgheNghiepValue(value);
    setNgheNghiepDesc(desc);
  };
  const handleST = ({id, type, price, desc}) => {
    setSoThichID(id);
    setSoThich_T(type);
    setSoThich_P(price);
    setSoThichDesc(desc);
  };
  const handleStep = (step) => {
    setInitStep(step);
  };

  const handleSugest = () => {
    fetch('http://127.0.0.1:5000/api/tuvan', {
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
      .catch((err) => console.log(err));
  };
  const steps = [{id: 'tc'}, {id: 'gt'}, {id: 'nn'}, {id: 'st'}, {id: 'kq'}, {id: 'ct'}];

  const [name, setName] = useState('');
  const {step, navigation} = useStep({
    steps,
    initialStep: 0,
  });

  const props = {
    name,
    setName,
    navigation,
    initStep,
    handleStep,
  };
  const values = {
    gioiTinhID,
    gioiTinh_C,
    gioiTinh_T,
    gioiTinhDesc,
    soThichID,
    soThich_T,
    soThich_P,
    soThichDesc,
    ngheNghiepID,
    ngheNghiepValue,
    ngheNghiepDesc,
    sugestCars,
  };

  switch (step.id) {
    case 'tc':
      return <TrangChu {...props} />;
    case 'gt':
      return <GioiTinh handleGT={handleGT} {...props} />;
    case 'nn':
      return <NgheNghiep handleNN={handleNN} {...props} />;
    case 'st':
      return <SoThich handleST={handleST} {...props} handleSugest={handleSugest} />;
    case 'kq':
      return <KetQua {...values} {...props} />;
    case 'ct':
      return <ChiTiet {...props} />;
    default:
      return <Error />;
  }
}

export default Suggest;
