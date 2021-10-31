import './Styles.css'

function TrangChu({name, setName, navigation}) {
  const handleNext = () => {
    if (name) {
      navigation.next()
    } else alert('Vui lòng nhập tên của bạn !')
  }
  return (
    <div className='content'>
      <div className='form form-tc'>
        <div className='form-head'>
          <p>Chào mừng đến với trang tư vấn mua xe ô tô</p>
          <input
            type='text'
            placeholder='Xin mời nhập tên của bạn'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className='btn' onClick={handleNext}>
          Tiếp theo
        </button>
      </div>
    </div>
  )
}

export default TrangChu
