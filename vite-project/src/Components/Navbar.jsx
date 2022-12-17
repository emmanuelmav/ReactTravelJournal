import logo from '../assets/logo.svg'

const Navbar = () => {
    return (
        <nav className="nav">
            <img className='nav__logo' src={logo} alt="logo" />
            <span className='nav__title'>my travel journal.</span>
        </nav>
    )
}

export default Navbar;