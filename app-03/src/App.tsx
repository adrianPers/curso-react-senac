import './App.css'
import Card from './components/Card'
import Comment from './components/Comment'
import Panel from './components/Panel'
import imgPanel from './assets/img-panel.png'
import ListProducts from './components/ListProducts'

function App() {

  return (
    <div className="App">

      <h1 className='title-exe'>Exercício 01 - Cards</h1>
  
      <Card 
      name='Adrian'
      userType='visitante'/>
      <Card 
      name='Davi'
      userType='admin'/>
      <Card 
      name='Giovana'
      userType='editor'/>
      <Card 
      name='Gabriel'
      userType='visitante'/>
      <Card 
      name='Maria'
      userType='admin'/>
      <Card 
      name='Giovani'
      userType='editor'/>

      <h1 className='title-exe'>Exercício 02 - Comentários</h1>

      <Comment 
      author='Adrian'
      reviewed={false}/>

      <Comment
      author='Davi'
      reviewed={true}/>

      <Comment
      author='Giovana'
      reviewed={true}/>

      <Comment
      author='Gabriel'
      reviewed={false}/>

      <h1 className='title-exe'>Exercício 03 - Painel</h1>

      <Panel title='Lover is a day'>
        <img src={imgPanel} alt="Imagem do painel" />
      </Panel>

      <Panel title='Lover is a day'>
        <img src={imgPanel} alt="Imagem do painel" />
      </Panel>

      <Panel title='Lover is a day'>
        <img src={imgPanel} alt="Imagem do painel" />
      </Panel>

       <Panel title='Coisas que gosto'>
        <ul>
          <li>Programar</li>
          <li>Estudar</li>
          <li>Viajar</li>
          <li>Comer</li>
          <li>Jogar</li>
        </ul>
      </Panel>

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
  
    </div>
  )
}

export default App
