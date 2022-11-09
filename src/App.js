
import './App.css';


const User = (props) => {
  return (
    <div className="user">
      <h3> Name: {props.name}</h3>
      <h3> email: {props.email}</h3>
      <h3> Age : {props.age}</h3>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h2> Props and Component Implimentation</h2>
      <User name ="Noel Owolabi" email ="emmanuelowolabiadebayo@gmail.com" age = {20}/>
      
    </div>
  );
}

export default App;
