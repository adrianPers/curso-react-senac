
import Box from './components/Box';
import styles from './app.module.css';
import Input from './components/Input';
import ButtonBox from './components/ButtonBox';
import Steps from './components/Steps';
import Divider from './components/Divider';
import { useState } from 'react';
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

  const handleInputChange = (name: string, value: string) => {
    setDataForm((prevDataForm) => ({
      ...prevDataForm,
      [name]: value
    }))
  };



  return (
    <div className={styles.app}
      onKeyDownCapture={(e) => { console.log(e.key) }}>

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
              update={handleInputChange}
              label='nome'
              name='name'
              placeholder='Digite seu nome'
              required={!true}
              value={dataForm.name}
            />

            <Input
              update={handleInputChange}
              name='phone'
              label='Telefone'
              placeholder='Digite seu telefone'
              required={false}
              value={dataForm.phone} />

            <Input
              update={handleInputChange}
              name='email'
              label='E-mail'
              placeholder='Digite seu e-mail'
              required={!true}
              value={dataForm.email} />

            <ButtonBox
              buttons={[
                { text: 'Continuar', onClick: handNextStep }
              ]} />


          </Form>
        )}

        {currentStep === 1 && (
          <Form >
            <Input
              name='companyName'
              update={handleInputChange}
              label='Nome da Empresa'
              placeholder='Digite o nome da empresa'
              required={true}
              value={dataForm.companyName} />

            <Input
              name='employeesNumber'
              update={handleInputChange}
              label='N° de Funcionários'
              placeholder='Digite o N° de Funcionários'
              required={false}
              value={dataForm.employeesNumber} />

            <TextArea
              name='aboutCompany'
              value={dataForm.aboutCompany}
              update={handleInputChange}
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
              name='aboutProject'
              value={dataForm.aboutProject}
              update={handleInputChange}
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

      <div>
        <h2>Dados do Formulário</h2>
        <pre>{JSON.stringify(dataForm, null, 2)}</pre>
      </div>

    </div>
  )
}

export default App
