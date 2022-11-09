import { planet } from './Planet';
import './App.css';



function App() {

  return (
    <div className="App">
      <h2> Component</h2>
      <div>
        <ol>
        { planet.map((planet)=>{
          return (
            planet.isGasPlanet? <l1> {planet.name} </l1> : null
          )
        
        })}
        </ol>
       
      </div>  
    </div>
  );
}

export default App;
