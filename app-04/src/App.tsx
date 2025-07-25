
import Box from './components/Box';
import styles from './app.module.css';
import Input from './components/Input';
import ButtonBox from './components/ButtonBox';
import Steps from './components/Steps';
import Divider from './components/Divider';
import { useState, useEffect } from 'react';
import Form from './components/Form';
import TextArea from './components/TextArea';


function App() {

  const [currentStep, setCurrentStep] = useState(0)
  const [dataForm, setDataForm] = useState({
    name: '',
    phone: '',
    email: '',
    companyName: '',
    employeesNumber: '',
    aboutCompany: '',
    aboutProject: ''
  });

  const handNextStep = () => {
    setCurrentStep(prevStep => prevStep + 1)
  };

  const handBackStep = () => {
    setCurrentStep(prevStep => prevStep - 1)
  };

  const handleInputChange = (name : string, value: string) => {
    setDataForm({
      ...dataForm,
      [name]: value
    });
  };  

  

  return (
    <div className={styles.app}
    onKeyDownCapture={(e) => {console.log(e.key)}}>
      
      <Box >

        <Steps
          currentStep={currentStep}
          step={[{
            nameStps: 'Contatos', nameIcon: 'account_circle'
          }, {
            nameStps: 'Empresa', nameIcon: 'corporate_fare'
          }, {
            nameStps: 'Projeto', nameIcon: 'computer'
          }]}
        />

        <Divider />

        {currentStep === 0 && (
          <Form>
            <Input
              label='Nome'
              placeholder='Digite seu nome'
              required={!true} 
              update={() => handleInputChange}
            />

            <Input
              label='Telefone'
              placeholder='Digite seu telefone'
              required={false} />

            <Input
              label='E-mail'
              placeholder='Digite seu e-mail'
              required={!true} />

            <ButtonBox
              buttons={[
                { text: 'Continuar', onClick: handNextStep}
              ]} />


          </Form>
        )}

        {currentStep === 1 && (
          <Form >
            <Input
              label='Nome da Empresa'
              placeholder='Digite o nome da empresa'
              required={true} />

            <Input
              label='N° de Funcionários'
              placeholder='Digite o N° de Funcionários'
              required={false} />

            <TextArea
              label='Sobre a Empresa'
              placeholder='Fale um pouco sobre a empresa'
              rows={5}
            />


            <ButtonBox
              buttons={[
                { text: 'Voltar', onClick: handBackStep },
                { text: 'Continuar', onClick: handNextStep }
              ]} />
          </Form>
        )}

        {currentStep === 2 && (
          <Form>
            
           <TextArea
              label='Sobre o prejeto'
              placeholder='Fale um pouco sobre o projeto'
              rows={5}
            />

            <ButtonBox
              buttons={[
                { text: 'Voltar', onClick: handBackStep },
                { text: 'Enviar Resposta', onClick: handNextStep }
              ]} />


          </Form>
        )}

      </Box>

      {/* <div className={styles.teste}>
        <h2>Dados do Formulário</h2>
        <p>nome: {dataForm.name}</p>
        <p>telefone: {dataForm.phone}</p>
        <p>email: {dataForm.email}</p>
        <p>nome da empresa: {dataForm.companyName}</p>
        <p>n° de funcionários: {dataForm.employeesNumber}</p>
        <p>sobre a empresa: {dataForm.aboutCompany}</p> 
        <p>sobre o projeto: {dataForm.aboutProject}</p>

      </div> */}

    </div>
  )
}

export default App
