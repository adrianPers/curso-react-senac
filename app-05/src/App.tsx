
import styles from './app.module.css';
import { useState } from 'react';

import Exe01 from './components/exe01/index.tsx';
import { Container } from './components/exe02';
import Exe03 from './components/exe03/index.tsx';

function App() {


  const tasks = [
    { name: 'dormir', status: false },
    { name: 'correr', status: false }
  ]

  const [status, setStatus] = useState(true);
  const [statusTaks, setStatusTaks] = useState(tasks)


  const handleTasks = (name : string) => {

    setStatusTaks(statusTaks.map(task=> {

      if(task.name  === name){

        return {...task, status: !task.status}

      } else {

        return task

      }

    }))
  }

  return (
    <div className={styles.app}>

      <h1>Exercícios de useState()</h1>

      <h2>Exercício 01</h2>
      <Exe01
        status={status}
        setStatus={() => { setStatus(s => s = !s) }} />

      <h2>Exercício 02</h2>
      <Container />

      <h2>Exercício 03</h2>

      <div 
      className={styles.exe03}>

        {
          statusTaks.map((task, index) => (
            <Exe03
            name={task.name}
            status={task.status}
            onChange={() => handleTasks(task.name)}
            key={index}/>
          ))
        }

      </div>
      

        

    </div>
    
  )
}

export default App
