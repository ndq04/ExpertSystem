import {useState} from 'react'

function Suggest() {
  const [sugestCar, setSugestCar] = useState()
  const [state, setState] = useState({
    ten: '',
    gioiTinh: 'G1',
    ngheNghiep: 'N1',
    soThich: 'S1',
    thuNhap: 'T1',
  })
  const [form, setForm] = useState({
    color: 'C_T',
    price: 'P_1',
    type: 'T_M',
    company: 'CO_V',
  })

  const data = {
    giotinh: [
      {val: 'G1', lab: 'Nam'},
      {val: 'G2', lab: 'Nữ'},
    ],
    G1: [
      {val: 'C_T', lab: 'Trắng'},
      {val: 'C_De', lab: 'Đen'},
      {val: 'C_Do', lab: 'Đỏ'},
    ],
    G2: [
      {val: 'C_T', lab: 'Trắng'},
      {val: 'C_Do', lab: 'Đỏ'},
    ],
    nghenghiep: [
      {val: 'N1', lab: 'Công nhân'},
      {val: 'N2', lab: 'Bác sĩ'},
      {val: 'N3', lab: 'Giáo viên'},
      {val: 'N4', lab: 'Nhân viên văn phòng'},
      {val: 'N5', lab: 'Doanh nhân'},
    ],
    N123: [
      {val: 'P_1', lab: 'Từ 300 triệu đến 800 triệu'},
      {val: 'P_2', lab: 'Từ 1 tỷ đến 2 tỷ'},
    ],
    N4: [
      {val: 'P_1', lab: 'Từ 300 triệu đến 800 triệu'},
      {val: 'P_2', lab: 'Từ 1 tỷ đến 2 tỷ'},
      {val: 'P_3', lab: 'Từ 2 tỷ đến 4 tỷ'},
    ],
    N5: [
      {val: 'P_2', lab: 'Từ 1 tỷ đến 2 tỷ'},
      {val: 'P_3', lab: 'Từ 2 tỷ đến 4 tỷ'},
      {val: 'P_4', lab: 'Trên 4 tỷ'},
    ],
    sothich: [
      {val: 'S1', lab: 'Thể thao'},
      {val: 'S2', lab: 'Du lịch'},
      {val: 'S3', lab: 'Khám phá, phiêu lưu'},
      {val: 'S4', lab: 'Công nghệ'},
    ],
    S1: [
      {val: 'T_M', lab: 'Mini/Hatchback'},
      {val: 'T_Se', lab: 'Sedan'},
      {val: 'T_P', lab: 'Pickup'},
    ],
    S2: [
      {val: 'T_M', lab: 'Mini/Hatchback'},
      {val: 'T_Se', lab: 'Sedan'},
      {val: 'T_Su', lab: 'SUV'},
    ],
    S3: [
      {val: 'T_M', lab: 'Mini/Hatchback'},
      {val: 'T_Su', lab: 'SUV'},
      {val: 'T_P', lab: 'Pickup'},
    ],
    S4: [
      {val: 'T_M', lab: 'Mini/Hatchback'},
      {val: 'T_Se', lab: 'Sedan'},
      {val: 'T_Su', lab: 'SUV'},
      {val: 'T_P', lab: 'Pickup'},
    ],
    thunhap: [
      {val: 'T1', lab: 'Từ 20 triệu đến 50 triệu'},
      {val: 'T2', lab: 'Từ 50 triệu đến 100 triệu'},
      {val: 'T3', lab: 'Từ 100 triệu đến 200 triệu'},
      {val: 'T4', lab: 'Trên 200 triệu'},
    ],
    T1: [
      {val: 'CO_V', lab: 'Vinfast'},
      {val: 'CO_K', lab: 'Kia'},
      {val: 'CO_Ho', lab: 'Honda'},
      {val: 'CO_Hy', lab: 'Hyundai'},
    ],
    T2: [
      {val: 'CO_K', lab: 'Kia'},
      {val: 'CO_Ho', lab: 'Honda'},
      {val: 'CO_Hy', lab: 'Hyundai'},
    ],
    T3: [
      {val: 'CO_K', lab: 'Kia'},
      {val: 'CO_Ho', lab: 'Honda'},
      {val: 'CO_Hy', lab: 'Toyata'},
      {val: 'CO_M', lab: 'Mercedes'},
    ],
    T4: [
      {val: 'CO_B', lab: 'BMV'},
      {val: 'CO_M', lab: 'Mercedes'},
    ],
  }
  const handleChangeState = (e) => {
    const {value, name} = e.target
    setState({
      ...state,
      [name]: value,
    })
  }
  const handleChangeForm = (e) => {
    const {value, name} = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }
  const handleSugest = () => {
    fetch('http://127.0.0.1:2000/api/tuvan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        gioitinh: form.color,
        nghenghiep: form.price,
        sothich: form.type,
        thunhap: form.company,
      }),
    })
      .then((res) => res.json())
      // .then((data) => console.log(data.car))
      .then((data) => setSugestCar(data.car))
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <div style={{display: 'flex'}}>
        <div>
          <label>
            Mời nhập tên của bạn
            <input
              type='text'
              name='ten'
              onChange={handleChangeState}
            />
          </label>

          <label>
            <p>Giới Tính</p>
            <select
              name='gioiTinh'
              value={state.gioiTinh}
              onChange={handleChangeState}
            >
              {data.giotinh.map((op, i) => (
                <option key={i} value={op.val}>
                  {op.lab}
                </option>
              ))}
            </select>
          </label>
          {state.gioiTinh === 'G1' && (
            <div>
              {data.G1.map((item, i) => (
                <label key={i}>
                  <span>{item.lab}</span>
                  <input
                    name='color'
                    type='radio'
                    value={item.val}
                    onChange={handleChangeForm}
                    checked={form.color === item.val}
                  />
                </label>
              ))}
            </div>
          )}

          {state.gioiTinh === 'G2' && (
            <div>
              {data.G2.map((item, i) => (
                <label key={i}>
                  <span>{item.lab}</span>
                  <input
                    name='color'
                    type='radio'
                    value={item.val}
                    onChange={handleChangeForm}
                    checked={form.color === item.val}
                  />
                </label>
              ))}
            </div>
          )}

          <label>
            <p>Nghề nghiệp</p>
            <select
              name='ngheNghiep'
              value={state.ngheNghiep}
              onChange={handleChangeState}
            >
              {data.nghenghiep.map((op, i) => (
                <option key={i} value={op.val}>
                  {op.lab}
                </option>
              ))}
            </select>
          </label>

          {(state.ngheNghiep === 'N1' ||
            state.ngheNghiep === 'N2' ||
            state.ngheNghiep === 'N3') && (
            <div>
              {data.N123.map((item, i) => (
                <label key={i}>
                  <span>{item.lab}</span>
                  <input
                    name='price'
                    type='radio'
                    value={item.val}
                    onChange={handleChangeForm}
                    checked={form.price === item.val}
                  />
                </label>
              ))}
            </div>
          )}

          {state.ngheNghiep === 'N4' && (
            <div>
              {data.N4.map((item, i) => (
                <label key={i}>
                  <span>{item.lab}</span>
                  <input
                    name='price'
                    type='radio'
                    value={item.val}
                    onChange={handleChangeForm}
                    checked={form.price === item.val}
                  />
                </label>
              ))}
            </div>
          )}

          {state.ngheNghiep === 'N5' && (
            <div>
              {data.N5.map((item, i) => (
                <label key={i}>
                  <input
                    name='price'
                    type='radio'
                    value={item.val}
                    onChange={handleChangeForm}
                    checked={form.price === item.val}
                  />
                  <span>{item.lab}</span>
                </label>
              ))}
            </div>
          )}

          <label>
            <p>Sở thích</p>
            <select
              name='soThich'
              value={state.soThich}
              onChange={handleChangeState}
            >
              {data.sothich.map((op, i) => (
                <option key={i} value={op.val}>
                  {op.lab}
                </option>
              ))}
            </select>
          </label>

          {state.soThich === 'S1' && (
            <div>
              {data.S1.map((item, i) => (
                <label key={i}>
                  <input
                    name='type'
                    type='radio'
                    value={item.val}
                    onChange={handleChangeForm}
                    checked={form.type === item.val}
                  />
                  <span>{item.lab}</span>
                </label>
              ))}
            </div>
          )}
          {state.soThich === 'S2' && (
            <div>
              {data.S2.map((item, i) => (
                <label key={i}>
                  <input
                    name='type'
                    type='radio'
                    value={item.val}
                    onChange={handleChangeForm}
                    checked={form.type === item.val}
                  />
                  <span>{item.lab}</span>
                </label>
              ))}
            </div>
          )}
          {state.soThich === 'S3' && (
            <div>
              {data.S3.map((item, i) => (
                <label key={i}>
                  <input
                    name='type'
                    type='radio'
                    value={item.val}
                    onChange={handleChangeForm}
                    checked={form.type === item.val}
                  />
                  <span>{item.lab}</span>
                </label>
              ))}
            </div>
          )}
          {state.soThich === 'S4' && (
            <div>
              {data.S4.map((item, i) => (
                <label key={i}>
                  <input
                    name='type'
                    type='radio'
                    value={item.val}
                    onChange={handleChangeForm}
                    checked={form.type === item.val}
                  />
                  <span>{item.lab}</span>
                </label>
              ))}
            </div>
          )}

          <label>
            <p>Thu nhập (Trên tháng)</p>
            <select
              name='thuNhap'
              value={state.thuNhap}
              onChange={handleChangeState}
            >
              {data.thunhap.map((op, i) => (
                <option key={i} value={op.val}>
                  {op.lab}
                </option>
              ))}
            </select>
          </label>
          {state.thuNhap === 'T1' && (
            <div>
              {data.T1.map((item, i) => (
                <label key={i}>
                  <input
                    name='company'
                    type='radio'
                    value={item.val}
                    onChange={handleChangeForm}
                    checked={form.company === item.val}
                  />
                  <span>{item.lab}</span>
                </label>
              ))}
            </div>
          )}
          {state.thuNhap === 'T2' && (
            <div>
              {data.T2.map((item, i) => (
                <label key={i}>
                  <input
                    name='company'
                    type='radio'
                    value={item.val}
                    onChange={handleChangeForm}
                    checked={form.company === item.val}
                  />
                  <span>{item.lab}</span>
                </label>
              ))}
            </div>
          )}
          {state.thuNhap === 'T3' && (
            <div>
              {data.T3.map((item, i) => (
                <label key={i}>
                  <input
                    name='company'
                    type='radio'
                    value={item.val}
                    onChange={handleChangeForm}
                    checked={form.company === item.val}
                  />
                  <span>{item.lab}</span>
                </label>
              ))}
            </div>
          )}
          {state.thuNhap === 'T4' && (
            <div>
              {data.T4.map((item, i) => (
                <label key={i}>
                  <input
                    name='company'
                    type='radio'
                    value={item.val}
                    onChange={handleChangeForm}
                    checked={form.company === item.val}
                  />
                  <span>{item.lab}</span>
                </label>
              ))}
            </div>
          )}

          <button onClick={handleSugest}>Tư vấn</button>
        </div>
        <div>
          <p>
            {state.gioiTinh}:{form.color}
          </p>
          <p>
            {state.ngheNghiep}:{form.price}
          </p>
          <p>
            {state.soThich}:{form.type}
          </p>
          <p>
            {state.thuNhap}:{form.company}
          </p>
        </div>
      </div>

      {state.ten && <h3>Xin chào {state.ten}</h3>}

      {typeof sugestCar === 'object' && (
        <div>
          <img src={sugestCar.image} alt={sugestCar.name} />
          <p>{sugestCar.name}</p>
          <p>
            {sugestCar.price.toLocaleString('vi-VN')} VND
          </p>
        </div>
      )}
      {typeof sugestCar === 'string' && (
        <div>
          <h4>Không có sản phẩm phù hợp</h4>
        </div>
      )}
    </div>
  )
}

export default Suggest
