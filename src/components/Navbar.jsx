import { headerLogo } from '../assets/images';
import {hamburger} from "../assets/icons";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className='padding-x py-8 fixed z-10 w-full backdrop-blur-md z-20'>
        <nav className='flex justify-between items-center max-container transition-all'>
            <a href="/" className='hover:bg-orange-200 hover:scale-105 rounded-full transition'>
                <img src={headerLogo} alt="Logo" width={130} height={29} className='p-2 rounded-full'/>
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li className='hover:scale-105 transition-all' key={item.label}>
                        <a href={item.href}
                        className='font-montserrat leading-normal text-lg  text-black hover:scale-150'>
                          {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div>
                <img src={hamburger} alt="Hamburger" width={25} height={25} className='hidden max-lg:block '/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
