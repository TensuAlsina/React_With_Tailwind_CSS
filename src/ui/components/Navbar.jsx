 
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.svg'
 const Navbar = () => {  
  return (
    <div className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="pt-2">
                <img src={Logo} alt="" />
            </div>
            <div className="hidden md:flex space-x-6">
                <Link to="/" className='hover:text-darkGrayishBlue'>Pricing</Link>
                <Link to="/" className='hover:text-darkGrayishBlue'>Product</Link>
                <Link to="/" className='hover:text-darkGrayishBlue'>About Us</Link>
                <Link to="/" className='hover:text-darkGrayishBlue'>Careers</Link>
                <Link to="/" className='hover:text-darkGrayishBlue'>Community</Link>
            </div>
            <Link className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get Started</Link>
        </div>
    </div>
  )
}

export default Navbar