import './App.css'
import Button from './components/ui/Button';
import { PlusIcon } from './icons/PlusIcon';
function App() {
  function handleOnClick() {
    console.log('Button clicked!')
  };

  return (
    <>
      <Button size='sm' variant='primary' onClick={handleOnClick} text={"Click me!"}></Button>
      <Button size='md' variant='primary' onClick={handleOnClick} text={"Click me!"}></Button>
      <Button size='lg' variant='primary' onClick={handleOnClick} text={"Click me!"} startIcon={<PlusIcon size='lg' />}></Button>
    </>
  )
}

export default App
