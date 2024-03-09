import { FaShoppingCart } from 'react-icons/fa';
import './stylestop.css'
import Hero from '../hero/Hero';
import Deals from './Deal';
import Bottom from './bot';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <ul className="navbar-menu">
                    <div className='one'>
                        <p>Hello</p>
                        <h3 > Select address</h3>
                    </div>
                    <button className='off'> search</button>
                    <div className='two'>
                        <p>Welcome</p>
                        <h3>Sign In / Register </h3>
                    </div>
                    <div className='three'>
                        <p>Return</p>
                        <h3>& Order </h3>
                    </div>
                    <FaShoppingCart />
                </ul>
            </nav>
            <Bottom/>
            <Hero />
            <Deals />
        </>
    );
}

export default Navbar;
