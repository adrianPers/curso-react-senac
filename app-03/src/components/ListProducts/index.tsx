
import './list-products.css'
import Product from '../Product'

type Product = {
    name: string
    price: string
    available: boolean
}

type ListProductsProps = {
    products: Product[]   
}

const ListProducts = (props: ListProductsProps) => {
    return (
        <div className='list-products'>
            {props.products.map((product, index) => (
                <Product 
                    key={index}
                    name={product.name}
                    price={product.price}
                    available={product.available}
                />
            ))}
        </div>
    )
}

export default ListProducts