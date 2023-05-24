import './App.css'
import ClassComponent from './Components/ClassComponent'
import FuncComponent from './Components/FuncComponent'



function App() {

  return (
    <>
      
    <ClassComponent/>
    <FuncComponent text={'Funcion Nº 1'} salario = {15.000}/>
    <FuncComponent text={'Funcion Nº 2'} salario = {300.000}/>

      
    </>
  )
}

export default App


