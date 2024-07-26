import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Button from './components/Button';
import Navbar  from './components/Navbar';
import GreetingByFunction from './components/GreetingByFunction';
import GreetingByClass from './components/GreetingByClass';
import Counter from './components/Counter';
import Form from './components/Form';
import ClassButton from './components/ClassButton';
import Tabular from './components/Tabular';


function App() {
  
  const fruits = ["Apple", "Banana", "Mango"];
  const cars = ["BMW", "Mercedes", "Audi"];
  return (
    <>
    <Navbar></Navbar>
    <div className='container'>
    
   <h1 style ={{textAlign:"center"}}>Welcome to React</h1>
   <Button data="Rsgister"/>
   <Button data="Login"/>
   <Button data="More Info"/>
   <GreetingByFunction name = "suraj" />

   <GreetingByClass name = "Arbaj" />
  
   </div>  
   <ul>
    {fruits.map((element,index) =>(
      <li key ={index}>{element}</li>
    ))}
    </ul>

    <div>
      {cars.map((value,index) => (
        <h3 key={index} style={{textAlign: "center"}}>
          {value}
          </h3>
      ))}
      <Counter />
      <br /> <hr />
      {/* <Tabular /> */}
      <Form />
    </div>
    <ClassButton name="LOGIN" />
    <ClassButton name="REGISTER" />
   </>
   
  );
}

export default App;
