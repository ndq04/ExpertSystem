import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
      <h3>Duy Quang</h3>
      <ul>
        <li>
          <Link to='/'>Showroom</Link>
        </li>
        <li>
          <Link to='/tuvan'>Tư vấn mua xe</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
