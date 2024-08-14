import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav-logo'>Royal Enfield</div>
        <ul className='nav-men'>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-contact'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar
