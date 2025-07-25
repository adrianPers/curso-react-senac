
import './product.css'
import imgProduct from '../../assets/product.png'
import imgNoProduct from '../../assets/no-product.png'


type ProductProps = {
    key: number
    name: string
    price: string
    available: boolean
}

const Product = (props: ProductProps) => {
    return (
        <div className={`product ${props.available ? 'available' : 'unavailable'}`} key={props.key}>
            <h2>
                <img src={props.available ? imgProduct : imgNoProduct} alt="Imagem do produto" />
                {props.name}</h2>
            <p>R$ {props.price}</p>
            <span className='status'>{props.available ? 'Disponível' : 'Indisponível'}</span>
        </div>
    )
}

export default Product