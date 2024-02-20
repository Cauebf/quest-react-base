import './App.css'
import Button from './components/AlertButton'
import Paragraph from './components/StyledText'

function App() {
  return (
    <>
      <Paragraph text="Texto colorido e em maiúsculas" color="indigo"/>

      <Button label="Baixar"/>
    </>
  )
}

export default App