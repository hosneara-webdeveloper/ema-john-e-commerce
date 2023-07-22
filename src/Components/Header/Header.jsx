
import logo from '../../assets/Logo.png'
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
                <div className='menu'>
                <ul className='main-menu'>
                    <li className='line'><a className='angry' href="shop">Shop</a></li>
                    <li className='line'><a className='angry' href="Order">Order</a></li>
                    <li className='line'><a className='angry' href="Order Review">Order Review</a></li>
                    <li className='line'><a className='angry' href="Manage Inventory">Manage Inventory</a></li>
                </ul>
                <button className='menu-bar' onClick={Toggler}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></button>
                </div>
                    
           
            </nav>
        </header>
    );
};


const Toggler = () => {
    let nav = document.querySelector('.main-menu');
    if (nav.style.display == 'none'){
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}


export default Header;