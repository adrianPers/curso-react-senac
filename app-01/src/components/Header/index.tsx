import './header.css'
import Foto from '../../assets/img-perfil.png'

const Header = () => {
    return(
        <header className='header-perfil'>
            <span></span>

            <h2>Adrian Perira</h2>
            <img src={Foto} alt="perfil"  className='foto'/>

        </header>
    )
}

export default Header