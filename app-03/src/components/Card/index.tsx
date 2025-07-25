
import './card.css'
import imgUser from '../../assets/user.svg'

type CardProps = {
    name: string
    userType: string
}

const userTypes = (user) => {

    if (user === 'admin') {
        return 'card card-admin'
    } else if (user === 'editor') {  
        return 'card card-editor'
    } else {
        return 'card card-visitor'
    }   
}

const Card = (props : CardProps) => {
    return (
        <div className={userTypes(props.userType)}>
          
           <div className='box-img'>
            <img src={imgUser} alt="User" />
            <h3>{props.name}</h3>
           </div>

           <h3>
            {props.userType === 'admin' && <h4 className='admin'>Bem-vindo, administrador</h4>}
            {props.userType === 'editor' && <h4 className='editora'>Acesso limitado para visitantes</h4>}
            {props.userType === 'visitante' && <h4 className='visitante'>Editor autorizado</h4>}
           </h3>
        </div>
    )
}

export default Card 
