import './App.css'
import Paragraph from './components/paragraph/paragraph'
import Button from './components/button/button'

function App() {
  return (
    <div className='card'>
      <Paragraph text="Texto colorido e em maiúsculas" color="indigo"/>

      <Button label="Baixar CV"/>
    </div>
  )
}

export default App