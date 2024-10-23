import SearchMenuBar from './menubar/SearchMenuBar'; 
import NavBar from './menubar/NavBar'; 
import logo from '../../../assets/logo.jpg'; 
import '../header/Header.css'

export default function Header() {
  return (
    <div className='fixed-top'>
      {/* Search Menu Bar */}
      <SearchMenuBar logo={logo}/>
      
      {/* Nav Bar */}
      <NavBar logo={logo} />

      
    </div>
  );
}
