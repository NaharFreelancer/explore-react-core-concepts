import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {

  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = () =>{
    alert('Button 2 Clicked')

  }

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
    <Friends></Friends>
    <Users></Users>
    <Counter></Counter>
    <Team></Team>
      <h3> React Core Concepts Part-2</h3>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Button 2</button>
      <button onClick={() =>{alert('Third Clicked')}}>Third</button>
      <button onClick={()=> addToFive(3)}>Button 4</button>
      
    </>
  )
}

export default App
