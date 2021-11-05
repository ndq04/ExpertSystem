import {Link} from 'react-router-dom'

function Error() {
  return (
    <div className='error-page'>
      <Link to='/'>
        <button className='btn btn--back'>Quay lại</button>
      </Link>
    </div>
  )
}

export default Error
