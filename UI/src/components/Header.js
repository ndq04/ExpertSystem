import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
      <h3>SHOWROOM</h3>
      <ul>
        <li>
          <Link to='/'>Trang chủ</Link>
        </li>
        <li>
          <Link to='/tuvan'>Tư vấn mua xe</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
