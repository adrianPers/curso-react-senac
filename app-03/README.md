# Aula 03
## Renderização condicional
Nesta aulas aprendemos o conceito de renderização condicional por meio do uso de props.

Nos códigos abaixo podemos notar como a props `userType` interfere diretamente na estilização e no texto do componente `Card` .

### Função para definir a classe CSS :

```tsx
const userTypes = (user: string) => {

  if (user === 'admin') {
    return 'card card-admin'
  } else if (user === 'editor') {  
    return 'card card-editor'
  } else {
    return 'card card-visitor'
  }   
}

```
<p align="right">./src/components/Card/index.tsx</p>

### Componente Card :

```tsx
const Card = (props : CardProps) => {
  return (
    <div className={userTypes(props.userType)}>
          
      <div className='box-img'>
       <img src={imgUser} alt="User" />
       <h3>{props.name}</h3>
      </div>

      <h3>
       {props.userType === 'admin' && 
         <h4 className='admin'>Bem-vindo, administrador</h4>}

       {props.userType === 'editor' && 
         <h4 className='editora'>Acesso limitado para visitantes</h4>}

       {props.userType === 'visitante' && 
         <h4 className='visitante'>Editor autorizado</h4>}
      </h3>
   </div>
    )
}
```
<p align="right">./src/components/Card/index.tsx</p>

### Resultado :

<p align="center">
    <img height=300
    src="./src/assets/img-panel.png" />
</p>

## Renderização de listas


A renderização de listas, um dos recursos do React mais utilizados, é o processo de exibição dinamica de vários elementos a partir de um array, usando geralmente o método `map()` :

### Componente ListProducts :

```tsx
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
```
<p align="right">./src/components/ListProducts/index.tsx</p>

### Utilização do componente ListProduct :

```tsx 

  <h1 className='title-exe'>Exercício 04 - Lista de Produtos</h1>

  <ListProducts products={[
    {name: 'Produto 01', price: '10.00', available: true},
    {name: 'Produto 02', price: '20.00', available: false},
    {name: 'Produto 03', price: '30.00', available: true},
    {name: 'Produto 04', price: '40.00', available: false},
    {name: 'Produto 05', price: '50.00', available: true},
    {name: 'Produto 06', price: '30.00', available: true},
    {name: 'Produto 07', price: '40.00', available: false},
    {name: 'Produto 08', price: '50.00', available: false}
  ]}/>
```
<p align="right">./App.tsx</p>

O array é passado via props para os dados  serem vizualizados.

### Resultado :

<p align="center">
    <img height=300
    src="./src/assets/img-panel.png" />
</p>

---
by : Adrian Pereira - [LinkedIn](https://www.linkedin.com/in/dev-adrian-pereira/) - [GitHub](https://github.com/adrianPers)