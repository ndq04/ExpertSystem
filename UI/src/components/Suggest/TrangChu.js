function TrangChu({name, setName, navigation}) {
  return (
    <div>
      <label>
        Xin mời nhập tên của bạn
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button onClick={() => navigation.next()}>
        Tiếp theo
      </button>
    </div>
  )
}

export default TrangChu
