import {useState} from 'react'

function Suggest() {
  const randomGT = () => {
    const gt = ['C_De', 'C_T']
    return gt[Math.floor(Math.random() * gt.length)]
  }
  const [gioiTinh, setGioiTinh] = useState('')
  const [state, setState] = useState({
    ten: '',
    nghenghiep: 'P_1',
    sothich: 'S1',
    thunhap: 'T1',
  })
  const randomCN = () => {
    const data = ['P_1', 'P_2']
    return data[Math.floor(Math.random() * data.length)]
  }
  const data = {
    nghenghiep: [
      {val: randomCN(), lab: 'Công nhân'},
      {val: 'N2', lab: 'Bác sĩ'},
      {val: 'N3', lab: 'Giáo viên'},
      {val: 'N4', lab: 'Doanh nhân'},
      {val: 'N5', lab: 'Nhân viên văn phòng'},
    ],
    sothich: [
      {val: 'S1', lab: 'Thể thao'},
      {val: 'S2', lab: 'Du lịch'},
      {val: 'S3', lab: 'Khám phá, phiêu lưu'},
      {val: 'S4', lab: 'Công nghệ'},
    ],
    thunhap: [
      {val: 'T1', lab: 'Từ 20 triệu đến 50 triệu'},
      {val: 'T2', lab: 'Từ 50 triệu đến 100 triệu'},
      {val: 'T3', lab: 'Từ 100 triệu đến 200 triệu'},
      {val: 'T4', lab: 'Trên 200 triệu'},
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

  return (
    <div>
      <label>
        Mời nhập tên của bạn
        <input
          type='text'
          name='ten'
          onChange={handleChange}
        />
      </label>

      <label>
        <p>Nghề nghiệp</p>
        <select
          name='nghenghiep'
          value={state.nghenghiep}
          onChange={handleChange}
        >
          {data.nghenghiep.map((op, i) => (
            <option key={i} value={op.val}>
              {op.lab}
            </option>
          ))}
        </select>
      </label>

      <label>
        <p>Sở thích</p>
        <select
          name='sothich'
          value={state.sothich}
          onChange={handleChange}
        >
          {data.sothich.map((op, i) => (
            <option key={i} value={op.val}>
              {op.lab}
            </option>
          ))}
        </select>
      </label>

      <label>
        <p>Thu nhập (Trên tháng)</p>
        <select
          name='thunhap'
          value={state.thunhap}
          onChange={handleChange}
        >
          {data.thunhap.map((op, i) => (
            <option key={i} value={op.val}>
              {op.lab}
            </option>
          ))}
        </select>
      </label>

      <button>Tư vấn</button>

      {state.name && <h3>Xin chào {state.name}</h3>}

      {console.log(state)}
      {console.log(gioiTinh)}
    </div>
  )
}

export default Suggest
